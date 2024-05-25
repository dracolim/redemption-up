import json
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain.agents import Tool


# Demo Tool
def get_current_weather(location, unit="fahrenheit"):
    """Get the current weather in a given location"""
    if "tokyo" in location.lower():
        return json.dumps({"location": "Tokyo", "temperature": "10", "unit": unit})
    elif "san francisco" in location.lower():
        return json.dumps(
            {"location": "San Francisco", "temperature": "72", "unit": unit}
        )
    elif "paris" in location.lower():
        return json.dumps({"location": "Paris", "temperature": "22", "unit": unit})
    else:
        return json.dumps({"location": location, "temperature": "unknown"})



class Tools:
    def __init__(self) -> None:
        self.tools = [
            # Current Search Engine Tool, can be replaced
            TavilySearchResults(),
            Tool(
                name="GetCurrentWeather",
                func=get_current_weather,
                description="Use this function to get the current weather",
            ),
        ]

    def get_tools(self):
        return self.tools
