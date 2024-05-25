import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
interface ChatBubbleProps {
  isMe: boolean;
  content: string;
}

export const ChatBubble = ({ isMe, content }: ChatBubbleProps) => {
  return (
    <div className="flex  w-full items-end ">
      {isMe ? null : (
        <Avatar className="my-2 ml-3">
          <AvatarImage src="" />
          <AvatarFallback className="text-gray-800 ">U</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`flex flex-col max-w-[70%] leading-1.5 p-4 my-2 border-gray-300 bg-white border-[1px] dark:bg-gray-700 ${
          isMe
            ? "rounded-s-xl rounded-se-xl ml-auto mr-2"
            : "rounded-e-xl rounded-ss-xl ml-2"
        }`}
      >
        <p className={`text-sm font-normal text-gray-900 dark:text-white`}>
          {content}
        </p>
      </div>
    </div>
  );
};
