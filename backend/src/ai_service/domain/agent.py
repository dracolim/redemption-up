from langchain_openai import ChatOpenAI
from langchain_openai import ChatOpenAI
from langchain_core.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder,
    PromptTemplate,
)
from langchain_core.output_parsers import JsonOutputParser

from langchain.agents import AgentExecutor, create_openai_functions_agent
from src.ai_service.domain.ai_utils.memory import Memory
from src.ai_service.domain.ai_utils.tools import Tools


class Agent(object):
    def __init__(self, name, task) -> None:
        # Agent Name
        self.name = name

        # Task of the chatbot
        self.task = task

        # Current memory of chatbot
        self.memory = Memory()

        # initialisation of bot
        self.llm = ChatOpenAI(
            model="gpt-3.5-turbo",
            temperature=0.3,
            max_retries=2,
            streaming=False,
            n=1,
            max_tokens=4000,
        )

        prompt = ChatPromptTemplate.from_messages(
            [
                (
                    "assistant",
                    f"Your name is ${name}, your task is: ${task}",
                ),
                MessagesPlaceholder(variable_name="messages", optional=True),
                MessagesPlaceholder(variable_name="agent_scratchpad"),
            ]
        )

        tools = Tools().get_tools()

        agent = create_openai_functions_agent(self.llm, tools, prompt)

        self.agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

    def executeQuery(self, query):
        self.memory.add("user", query)
        response = self.agent_executor.invoke({"messages": self.memory.getMemory()})[
            "output"
        ]
        self.memory.add("assistant", response)
        formattedResponse = {
            "content": response,
            "isMe": False,
        }
        print(self.memory.getMemory())
        return formattedResponse
