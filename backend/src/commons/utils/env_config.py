"""
Loads the respective env file
"""

import logging
import os
from typing import Optional
from dotenv import load_dotenv


class EnvConfig:
    """
    Loads the respective env file
    """

    REQUIRED_VARS = ["DATABASE_URL", "PORT", "OPENAI_API_KEY", "GROQ_API_KEY"]

    def __init__(
        self,
        logger: Optional[logging.Logger] = None,
    ):
        self._logger = (
            logger if logger is not None else logging.getLogger(self.__class__.__name__)
        )  # type: ignore

        print(f".env.{os.environ.get('FAST_API_ENV', 'development')}")

        load_dotenv(
            dotenv_path=f".env.{os.environ.get('FAST_API_ENV', 'development')}",
            override=True,
        )

        self._validate_config()

    def _validate_config(self) -> None:
        """Validates and loads all config parameters from files or env vars

        In this method, you can implement loading and validation logic for your
        deployment. The idea to run the validation here is to make sure that a
        faulty configuration is identified when starting the app instead of
        during the runtime through and application crash.
        """
        for f in self.REQUIRED_VARS:
            if f not in os.environ:
                raise ValueError(f"Environment variable {f} is required.")
