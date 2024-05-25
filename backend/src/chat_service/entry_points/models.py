from pydantic import BaseModel
from typing import List, Optional

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