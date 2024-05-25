"""
Implementation of the domain violation error
"""


from ..error_handling.base_error import BaseError


class DomainViolationError(BaseError):
    """
    Encapsulate logic for domain violation at the domain layer
    handle any errors when business rules are violated
    Examples:

    Checking volunteer is at least 18yo

    Choosing project which conflicts with medical condition
    """

    status_code = 422

    def __init__(self, message, status_code=None, payload=None):
        super().__init__(message=message, status_code=status_code, payload=payload)
