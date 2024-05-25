"""
Routes for the /chat end point
"""

import os
from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
import asyncio
import json

from ..domain import (
    chat_repository as chat_domain,
)

chat_router = APIRouter(
    prefix="/chat",
)


@chat_router.get("/raw-results")
async def get_raw_result(query: str = ...):
    threshold = 0.65
    res = chat_domain.query_pinecone(query)["matches"]
    fields_to_include = ["metadata"]
    parsed = [
        {field: d[field] for field in fields_to_include}
        for d in res
        if d["score"] > threshold
    ]
    if len(parsed) == 0:
        return {"isMe": False, "content": "Sorry, I am unable to answer that query"}
    return {"isMe": False, "content": parsed}


@chat_router.get("/chat")
async def get_demo_chat(language: str = ..., query: str = ...):
    threshold = 0.72
    res = chat_domain.query_pinecone(query)["matches"]
    fields_to_include = ["metadata"]
    parsed = [
        {field: d[field] for field in fields_to_include}
        for d in res
        if d["score"] > threshold
    ]
    if len(parsed) == 0:
        return {"isMe": False, "content": "Sorry, I am unable to answer that query"}
    answer = chat_domain.generate_answer(language, query, json.dumps(parsed))
    print(json.dumps(answer.text))
    return {"isMe": False, "content": answer.text}
