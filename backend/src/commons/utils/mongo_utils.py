"""
Utility code related to mongodb
"""

from bson import ObjectId
from bson.errors import InvalidId
from ..error_handling.http_error import HttpError


def is_valid_object_id(identifier: str) -> None:
    """
    Checks if it is an valid ObjectId
    """
    try:
        ObjectId(identifier)
    except InvalidId as e:
        raise HttpError(
            message=f"""{identifier} is not a valid ObjectId,
              it must be a 12-byte input or a 24-character hex string""",
            status_code=400,
        ) from e
