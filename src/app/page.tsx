"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex min-w-full min-h-screen justify-center items-center bg-master">
      <div className="grid w-full max-w-screen-xl self-stretch p-5 grid-cols-[minmax(100px,_200px)_1fr] gap-5">
        <aside className="flex flex-col rounded-sm items-center">
          <img src="./rdsai-logo.svg" alt="rds ai" />
          <span className="text-blue-50">App version 1.0</span>
        </aside>
        <main className="grid min-h-[400px] max-h-[500px] grid-rows-[min-content_1fr] bg-chat rounded-md overflow-x-hidden p-2">
          <strong className="border-2 border-b-slate-300 text-center text-2xl p-3">
            Chat
          </strong>
          <ScrollArea className="scroll-new-message test">
            <div className="flex flex-col p-4 gap-5">
              {messages.map((message) =>
                message.role === "user" ? (
                  <div className="flex flex-row w-10/12 gap-5 bg-master rounded-sm p-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[.6rem] text-green-500">
                        Usuário
                      </span>
                      <Avatar>
                        <AvatarFallback children="VC" />
                      </Avatar>
                    </div>
                    <p className="text-zinc-300">{message.content}</p>
                  </div>
                ) : (
                  <div className="flex flex-row w-10/12 gap-5 bg-master rounded-sm p-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[.6rem] text-yellow-500">AI</span>
                      <Avatar>
                        <AvatarFallback children="IA" />
                      </Avatar>
                    </div>
                    <p className="text-zinc-300">{message.content}</p>
                  </div>
                )
              )}
            </div>
          </ScrollArea>
          <form
            className="flex w-full max-w-[600px] flex-row gap-2 m-4 mx-auto items-center"
            onSubmit={handleSubmit}
          >
            <Input
              value={input}
              className="flex self-stretch"
              required
              onChange={handleInputChange}
            />
            <Button children="enviar" type="submit" />
          </form>
        </main>
      </div>
    </div>
  );
}
