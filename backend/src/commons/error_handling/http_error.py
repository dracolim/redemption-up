"""
Implementation of the http error
"""


from ..error_handling.base_error import BaseError


class HttpError(BaseError):
    """
    Encapsulate logic for http error at the API layer

    handle any error specific to route validation errors (eg. Validation error)
    """

    status_code = 422

    def __init__(self, message, status_code=None, payload=None):
        super().__init__(message=message, status_code=status_code, payload=payload)
