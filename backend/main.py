"""
Main entry point of the application
"""

from os import environ

import uvicorn
from src.commons.utils.env_config import EnvConfig
from src.app import create_server

EnvConfig()  # load the config


app = create_server()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
