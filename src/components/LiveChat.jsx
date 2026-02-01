import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const timerID1 = setInterval(() => {
      // console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(timerID1);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form className="w-full p-2 ml-2" onSubmit={(event) => {
        dispatch(addMessage({
          name: "Akhilesh R Madhyastha",
          message: liveMessage
        }))
        setLiveMessage("")
        event.preventDefault()
        }}>
        <input
          className="w-60 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 py-1 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
