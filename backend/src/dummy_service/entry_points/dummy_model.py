"""
Model for the dummy model
"""
from marshmallow import Schema, fields


class DummySchema(Schema):
    """
    Model for the dummy model
    """

    _id = fields.String(dump_only=True)
    text = fields.String(
        required=True,
        error_messages={
            "required": "Text field is required",
            "null": "Text Field may not be null.",
        },
    )
