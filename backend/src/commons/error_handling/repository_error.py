"""
Implementation of the repository error
"""


from ..error_handling.base_error import BaseError


class RepositoryError(BaseError):
    """
    Encapsulate logic for Repository error at the data layer
    handle any errors related to the data retrieval

    Examples:

    Connection (cannot establish connection with DB)

    DuplicateKey (record with same id exists)

    RecordNotFound
    """

    status_code = 500

    def __init__(self, message, status_code=None, payload=None):
        super().__init__(message=message, status_code=status_code, payload=payload)
