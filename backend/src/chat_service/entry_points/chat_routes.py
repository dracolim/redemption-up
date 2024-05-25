"""
Routes for the /chat end point
"""

import os
from fastapi import FastAPI, Request, File, HTTPException, APIRouter, UploadFile
from fastapi.responses import JSONResponse
import asyncio
import json
import shutil

from ..domain import (
    chat_repository as chat_domain,
)

chat_router = APIRouter(
    prefix="/chat",
)

# Define directories
UPLOAD_DIRECTORY = "uploads"
os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)

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



# @chat_router.post("/voice-chat")
# async def upload_audio(file: UploadFile = File(...)):
#     try:
#         file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
#         with open(file_location, "wb") as buffer:
#             shutil.copyfileobj(file.file, buffer)

#         # Transcribe audio using Whisper
#         with open(file_location, "rb") as audio_file:
#             transcription_text = chat_domain.transcribe_audio(audio_file)
        
#         # Clean up the audio file
#         os.remove(file_location)
#         print(transcription_text)

#         return {"transcription": transcription_text}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e)) from e
    
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
    cleaned_response = answer.text.replace('\n', '')

    return {"isMe": False, "content": cleaned_response}
