import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
from openai import OpenAI

from openai import OpenAI

# from llama_index.llms.groq import Groq
from llama_index.llms.openai import OpenAI as llama_openai
import ast

import pinecone
from pinecone import Pinecone, ServerlessSpec

load_dotenv()



openai_key = os.getenv("OPENAI_API_KEY")
groq_key = os.getenv("GROQ_API_KEY")
# groq_model = "llama3-8b-8192"
openai_model = "gpt-4o-2024-05-13"
pinecone_key = os.getenv("PINECONE_API_KEY")


def query_pinecone(query: str):
    pc = Pinecone(pinecone_key)
    index_name = "docs-quickstart-index"
    index = pc.Index(index_name)
    embedded_vector = embed_text(query)
    query_results = index.query(
        namespace="ns1",
        vector=embedded_vector,
        top_k=3,
        include_metadata=True,
    )
    return query_results


def embed_text(text: str):
    client = OpenAI(
        api_key=openai_key,
    )
    model = "text-embedding-ada-002"
    return client.embeddings.create(input=[text], model=model).data[0].embedding

def transcribe_audio(audio_file):
    client = OpenAI(
        api_key=openai_key,
    )
    transcription = client.audio.transcriptions.create(
        model="whisper-1", 
        file=audio_file
    )
    return transcription.text


def generate_answer(language:str, question: str, metadata_results: List[dict]):
    prompt = f"""
    You are an AI Assitant and you are communicating with elderly
    Keep the answer concise and below 40 words. Answer the question and mention the important information in {language} based on the given context only."
    You are an AI assistant. Given the following metadata results, please generate a perfectly formatted markdown answer to the query: '{question}'. Include the content with URLs as markdown links.
    """
    list_of_dicts = ast.literal_eval(metadata_results)
    for metadata in list_of_dicts:
        metadata = metadata["metadata"]
        prompt += f"URL: {metadata['url']}\nContent: {metadata['content']}\n\n"

    llm = llama_openai(model=openai_model, api_key=openai_key)
    response = llm.complete(prompt)
    return response
