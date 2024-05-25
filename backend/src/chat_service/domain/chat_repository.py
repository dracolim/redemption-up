import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
import openai
import pinecone
from llama_index import SimpleDirectoryReader, VectorStoreIndex, StorageContext, load_index_from_storage, VectorIndexRetriever
from llama_index.llms.groq import Groq
from PyPDF2 import PdfReader

load_dotenv()

class Document(BaseModel):
    id: str
    content: str
    link: str

class QueryResult(BaseModel):
    content: str
    link: str

class Answer(BaseModel):
    content: str
    sources: List[QueryResult]

openai.api_key = os.getenv("OPENAI_API_KEY")
groq_key = os.getenv("GROQ_API_KEY")
groq_model = "llama3-8b-8192"

def embed_text(text: str):
    response = openai.Embedding.create(
        input=[text],
        engine="text-embedding-ada-002"
    )
    return response["data"][0]["embedding"]

def generate_answer(question: str, context: str):
    prompt = f"Based on the following documents: {context}\n\nQuestion: {question}\nAnswer:"
    llm = Groq(model=groq_model, api_key=groq_key)
    response = llm.complete(prompt)
    return response