"""
Routes for the /chat end point
"""
import os
from fastapi import APIRouter, Request
import asyncio

# from marshmallow import ValidationError
# import pinecone
# from ...commons.error_handling.http_error import HttpError
# from ...commons.error_handling.repository_error import RepositoryError
# from ...commons.utils.mongo_utils import is_valid_object_id
# from ..domain import (
#     chat_repository as chat_domain,
# )
# from .models import Answer, QueryResult, Document

chat_router = APIRouter(
    prefix="/chat",
)

# pinecone.init(api_key=os.getenv("PINECONE_API_KEY"))
# index_name = "your-index-name"
# pinecone_index = pinecone.Index(index_name)


# @chat_router.get("/" , response_model=Answer)
# async def ask_question(question: str):
#     embedding = chat_domain.embed_text(question)
#     query_response = pinecone_index.query(embedding, top_k=5, include_metadata=True)

#     if not query_response["matches"]:
#         return Answer(content="Sorry, I don't have an answer to that question.", sources=[])

#     context = "\n\n".join([match["metadata"]["content"] for match in query_response["matches"]])
#     answer_content = chat_domain.generate_answer(question, context)
#     sources = [QueryResult(content=match["metadata"]["content"], link=match["metadata"]["link"]) for match in query_response["matches"]]

#     return Answer(content=answer_content, sources=sources)

@chat_router.get("/chat")
async def get_chat(query: str = ...):
    await asyncio.sleep(3)
    return {"isMe": False, "content": f"Hello, I am a bot. You said: {query}"}
