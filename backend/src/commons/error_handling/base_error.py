"""
Implementation of the base error class
"""

from fastapi.responses import JSONResponse


class BaseError(Exception):
    """
    Encapsulate logic for custom error
    """

    status_code = 500

    def __init__(self, message, status_code=None, payload=None):
        super().__init__()
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self) -> dict[str, str]:
        """
        Converts stored information to dictionary form
        """
        rv = dict(self.payload or ())
        rv["message"] = self.message
        return rv

    def respond(self) -> JSONResponse:
        """
        Returns the unique response from the error
        """
        return JSONResponse(content=self.to_dict(), status_code=self.status_code)
