"use client";

import { useChat } from "ai/react";
import React, { useEffect, useRef, useState } from "react";
import { Mic, X, Languages, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import { Button } from "@/components/ui/button";

import { useLazyGetChatQuery } from "@/services/chatAPI";

export default function Chatbot() {
  const [position, setPosition] = React.useState("bottom");
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [trigger, { data: chatData, isError }] = useLazyGetChatQuery();
  const [isNextChatLoading, setIsNextChatLoading] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isTransactionLoading,
  } = useChat({
    initialMessages: [
      {
        id: 1,
        role: "system",
        content:
          "You are a customer service chatbot for the website NFTicket, your answers should be short (30 words) and simple to understand.",
      },
      {
        id: 2,
        role: "system",
        content: `Introduction: 

                NFTicket uses NFTs to combat ticketing scams and scalping. NFTs provide security and traceability, ensuring authenticity and preventing fraud. Tickets are sold directly by organizers or on a marketplace. Smart contracts ensure secure transactions, and organizers earn from secondary sales. Scalping is reduced by limiting NFTs per wallet.	
                
                Target Audience: 
                Event goers (concerts, sports matches, conferences, conventions)
                
                Features:
                
                NFT Smart Contract
                - Deploys event contracts, manages minting, transfers ownership, and enables ticket redemption.
                - Allows trade on marketplace; tickets marked redeemed can't be reused.
                - Offers revenue potential for organizers from secondary transactions.
                
                Decentralized Marketplace:
                - Handles secondhand ticket trading with secure transactions.
                - Sellers authorize NFT transfer upon payment; commission benefits organizers.
                - Supports direct sale or auction; ensures ownership transfer on payment.
                
                Ticket Insurance:
                - Optional insurance covers cancellations; refunds portion of ticket price.
                - NFT smart contract triggers event cancellation and manages refunds.
                
                VR Concert Experience:
                - Offers virtual attendance; utilizes 360° livestreaming.
                - Provides VR-compatible experience for remote users.
                
                Pages:
                
                Initial Tickets Page:Facilitates first-hand ticket purchases; displays available events.
                Marketplace Page:Allows listing and purchase of ticket NFTs; shows transaction history.
                Your NFTickets Page: Displays user's owned tickets for convenience.
                
                Components: 
                Connect to wallet button: 
                - Located at the top right corner of website (right side on navigation bar at the top)
                - User can still navigate the website without connecting a wallet but is unable to make a purchase
                `,
      },
    ],
  });
  const [chatArray, setChatArray] = useState([]);

  useEffect(() => {
    trigger("demo");
    setIsNextChatLoading(true);
  }, []);

  const optionButtonPressed = (option) => {
    console.log("pressed");
  };

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  return (
    <AlertDialog className="" open={open} onOpenChange={setOpen}>
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

        <ScrollArea className="mb-2 h-80 w-full " ref={ref}>
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
                sendButtonPressed={optionButtonPressed}
              />
            </div>
          ) : (
            <div className="whitespace-pre-wrap">
              <ChatBubble content="test" isMe className="mr-4" />
              <ChatBubble content="test 2 " isMe={false} className="ml-4" />
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleSubmit} className="relative">
          <div className="px-[15px] pb-[20px]">
            <div className=" w-[100%] drop-shadow-lg h-fit flex items-center border-gray-300 border-[1px] rounded-xl bg-white">
              <input
                name="message"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="resize-none px-4 max-h-[40vh] grow border-none rounded-xl focus:outline-none border-transparent focus:ring-0 overflow-x-hidden"
              />
              <button
                size="icon"
                type="submit"
                variant="secondary"
                disabled={isTransactionLoading}
                // className="absolute right-1 top-1 h-8 w-10 bg-black hover:bg-gray-500"
              >
                <div className="p-2 flex">
                  <Mic />
                  <SearchIcon className="ml-2 mt-[2px] h-5 w-5" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
