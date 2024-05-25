import React from "react";

const ChatSources = ({ href, children }) => {
  return (
    <span className="inline-block">
      <a target="_blank" href={href} className="relative inline-block">
        <span className="w-4 h-4 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full">
          1
        </span>
      </a>
    </span>
  );
};

export default ChatSources;
