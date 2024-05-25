import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  options: string[];
  sendButtonPressed: (text: string) => void;
}

const ChatOptions = ({ options, sendButtonPressed }: Props) => {
  const { length } = options;
  return (
    <div
      className="flex justify-between space-x-3 transition animate-fade-in-down mt-2"
      key={options.join("-")}
    >
      {options.map((option) => (
        <button
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
          type="button"
          key={uuidv4()}
          onClick={() => sendButtonPressed(option)}
          className={`w-[150px] basis-1/${length} text-center rounded-xl leading-1.5 p-4 my-2 border-gray-300  hover:opacity-80 bg-white border-[1px] dark:bg-gray-700`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChatOptions;
