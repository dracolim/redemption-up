"""
Routes for the /dummy end point
"""
from fastapi import APIRouter, Request
from marshmallow import ValidationError
from pydantic import BaseModel, Field

from ...commons.error_handling.http_error import HttpError
from ...commons.error_handling.repository_error import RepositoryError
from ...commons.utils.mongo_utils import is_valid_object_id
from .dummy_model import DummySchema
from ..domain import (
    dummy_repository as dataAccess,
)

dummy_router = APIRouter(
    prefix="/dummy",
)

dummy_schema = DummySchema()

class Dummy(BaseModel):
    text: str = Field(..., description="Text field is required")

@dummy_router.get("/")
async def get_all_dummy():
    """
    Returns all dummy
    """
    dummies = await dataAccess.get_all_dummies()

    return [dummy_schema.dump(dummy) for dummy in dummies]


@dummy_router.get("/{identifier}")
async def get_dummy_id(identifier: str):
    """
    Returns the dummy by its _id
    """
    is_valid_object_id(identifier)

    dummy = await dataAccess.get_dummy_by_id(identifier)

    if dummy is None:
        raise RepositoryError(message=f"id:{identifier} Not Found", status_code=404)

    return dummy_schema.dump(dummy)


@dummy_router.post("/")
async def post_dummy(dummy: Dummy,):
    """
    Creates a new dummy
    """
    try:
        dummy_dict = dummy.dict()
        dummy = dummy_schema.load(dummy_dict)  # type: ignore
        result = await dataAccess.add_dummy(dummy)  # type: ignore

    except ValidationError as err:
        raise HttpError(message=err.messages, status_code=400) from err

    return ({"id": f"{result.inserted_id}"}), 200
