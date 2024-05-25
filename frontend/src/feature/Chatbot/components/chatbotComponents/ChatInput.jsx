import React, { useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import { Mic } from "lucide-react";
import AudioRecorder from "./AudioRecorder";
const ChatInput = ({ sendButtonPressed, isNextChatLoading }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleStopRecording = (audioBlob) => {
    console.log("audioBlob", audioBlob);
    // const formData = new FormData();
    // formData.append("audio", audioBlob, "recording.wav");
    // fetch("http://0.0.0.0:8080/chat/voice-chat", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  return (
    <div className="relative">
      <div className="px-[15px] pb-[20px]">
        <div className=" w-[100%] drop-shadow-lg h-fit flex items-center border-gray-300 border-[1px] rounded-xl bg-white">
          <input
            name="message"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="resize-none px-4 max-h-[40vh] grow border-none rounded-xl focus:outline-none border-transparent focus:ring-0 overflow-x-hidden"
          />
          <AudioRecorder onStopRecording={sendButtonPressed}></AudioRecorder>
          <button
            size="icon"
            variant="secondary"
            disabled={isNextChatLoading}
            onClick={() => {
              sendButtonPressed(input);
              setInput("");
            }}
          >
            <div className="pr-2 flex">
              <SearchIcon
                className="mt-[2px] h-5 w-5 "
                colour={isNextChatLoading ? "#808080" : "#171924"}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
