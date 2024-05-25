"""
Data access layer for the dummy end point
"""
from bson.objectid import ObjectId

from src import app


def get_all_dummies():
    """
    Returns all dummies from the db
    """
    return app.get_mongo().dummies.find().to_list(None)


def get_dummy_by_id(identifier: str):
    """
    Returns the dummmy by its _id
    """
    print("get_dummy_by_id")
    print(identifier)
    return app.get_mongo().dummies.find_one({"_id": ObjectId(identifier)})


def add_dummy(dummy: dict):
    """
    Adds a dummy to the db
    """
    return app.get_mongo().dummies.insert_one(dummy)
