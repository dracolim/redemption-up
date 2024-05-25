"use client";

import { useChat } from "ai/react";
import React, { useEffect, useRef, useState } from "react";
import { Mic, X, Languages, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BeatLoader from "react-spinners/BeatLoader";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ChatHeader from "./chatbotComponents/ChatHeader";
import SearchIcon from "@/components/icons/SearchIcon";
import { ChatBubble } from "./chatbotComponents/ChatBubble";
import ChatOptions from "./chatbotComponents/ChatOptions";
import { v4 as uuidv4 } from "uuid";

import { useLazyGetChatQuery } from "@/services/chatAPI";
import ChatInput from "./chatbotComponents/ChatInput";

export default function Chatbot() {
  const [position, setPosition] = React.useState("bottom");
  const [open, setOpen] = useState(false);
  const [trigger, { data: chatData, isError }] = useLazyGetChatQuery();
  const [isNextChatLoading, setIsNextChatLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [chatArray, setChatArray] = useState([]);
  const sendButtonPressed = (text) => {
    if (!text) return;
    setChatArray((prevChatArray) => {
      return [...prevChatArray, { isMe: true, content: text }];
    });
    trigger(text);
    setIsNextChatLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Adjust delay as needed
  }, [chatArray]);

  useEffect(() => {
    // dont update chat array if no content
    if (!chatData?.content) return;
    setIsNextChatLoading(false);
    setChatArray((prevChatArray) => {
      return [
        ...prevChatArray,
        {
          isMe: chatData.isMe,
          content: chatData.content,
        },
      ];
    });
  }, [chatData]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <ChatHeader />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white max-w-[351px] p-[0px] border rounded-lg">
        <div className="flex justify-center items-center border rounded-lg bg-[#171924] relative py-[29px] ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="absolute left-[15px] p-[4px] bg-white border rounded-xl w-[50px] h-[40px] flex justify-center items-center">
                <Languages className="text-black " />
                <ChevronDown className="w-[21px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-16 ml-10">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem className="text-left" value="en">
                  English
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ms">
                  Bahasa Melayu
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ta">
                  தமிழ் (Tamil)
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="zh">
                  中文 (Chinese)
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <h2 className="text-white text-bold text-[18px]">
            Your chatbot assistant
          </h2>
          <div className="absolute right-8 top-8">
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <X className="text-white" />
            </button>
          </div>
        </div>

        <ScrollArea className="mb-2 h-80 w-full">
          {chatArray.length == 0 ? (
            <div className="text-[#BAB9B9] mt-[70px]  mx-auto text-center max-w-[284px]">
              <h2 className="font-bold text-[18px] ">Your chatbot assistant</h2>
              <p className="text-[15px] mt-3">
                You can ask anything ranging from suggested retirement plans to
                how you can boost your income.
              </p>
              <ChatOptions
                options={[
                  "option 1 is the best becauese",
                  "option 2 is the best alla",
                ]}
                sendButtonPressed={sendButtonPressed}
              />
            </div>
          ) : (
            <div>
              {chatArray.map((chat) => {
                return (
                  <div
                    className={
                      !chat.isMe ? "transition animate-fade-in-down" : ""
                    }
                    key={uuidv4()}
                  >
                    <ChatBubble isMe={chat.isMe} content={chat.content} />
                  </div>
                );
              })}
              {isNextChatLoading && (
                <BeatLoader
                  className="ml-3"
                  size={10}
                  color="#171924"
                  speedMultiplier={0.5}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
        <ChatInput sendButtonPressed={sendButtonPressed} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
