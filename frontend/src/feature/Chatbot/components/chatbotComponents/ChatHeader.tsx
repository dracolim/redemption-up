import ChatbotIcon from "@/components/icons/ChatbotIcon";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="bg-white rounded-full h-[55px] w-[55px] flex items-center justify-center border-black border-[2px]">
      <ChatbotIcon />
    </div>
  );
};

export default ChatHeader;
