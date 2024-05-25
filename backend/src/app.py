# pylint: disable=C0415
"""
Functions required for running application
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import asyncio

from motor.motor_asyncio import AsyncIOMotorClient
from src.dummy_service.entry_points.dummy_routes import dummy_router
from src.chat_service.entry_points.chat_routes import chat_router
from src.commons.error_handling.base_error import BaseError
from src.commons.error_handling.domain_violation_error import (
    DomainViolationError,
)
from src.commons.error_handling.http_error import HttpError
from src.commons.error_handling.repository_error import RepositoryError

_mongo_client = AsyncIOMotorClient(os.environ.get("DATABASE_URL"))  # type: ignore


def get_mongo():
    """
    Returns the current database instance
    """
    if _mongo_client.jouvire is None:
        raise RepositoryError(message="Unable to connect to DB")
    return _mongo_client.jouvire


def create_server() -> FastAPI:
    """
    Create a FastAPI server
    """
    app = FastAPI()
    # Cors Middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Allows all origins
        allow_credentials=True,
        allow_methods=["*"],  # Allows all methods
        allow_headers=["*"],  # Allows all headers
    )


    @app.get("/")
    async def home():
        return "Hello from server"

    # Health route
    @app.get("/ping")
    async def ping():
        """
        Health check route
        """
    
        return "pong"

    # Include routes
    app.include_router(dummy_router)
    app.include_router(chat_router)

    # Register Error handlers
    app.add_exception_handler(BaseError, lambda req, ex: ex.respond())  # type: ignore
    app.add_exception_handler(DomainViolationError, lambda req, ex: ex.respond())  # type: ignore
    app.add_exception_handler(HttpError, lambda req, ex: ex.respond())  # type: ignore
    app.add_exception_handler(RepositoryError, lambda req, ex: ex.respond())  # type: ignore

    return app
