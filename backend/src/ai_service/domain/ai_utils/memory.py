from langchain.memory import ChatMessageHistory

class Memory:
    def __init__(self):
        super().__init__()
        self.history_length = 0
        self.index = ChatMessageHistory()

    def clear(self):
        self.index.clear()

    def add(self, key, value):
        if key == "user":
            self.index.add_user_message(value)
        elif key == "assistant":
            self.index.add_ai_message(value)
        else:
            raise KeyError("Unknown Memory Key.")

    def getMemory(self):
        return self.index.messages

    def query(self, top_k):
        return self.index.messages[-top_k:]
