import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Bharath",
      image:
        "https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg",
      message: "Hlo 😍",
    },
    {
      name: "Kajal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwjhWnWK2G7FAtLGlhQKXrKJ6tImRHwp10Dw&usqp=CAU",
      message: "Hi Bharath 🥰",
    },
    {
      name: "Shradha Kapoor",
      message: "Crazy Bharath 🧡🧡",
      image:
        "https://pbs.twimg.com/profile_images/1256500530244960257/Gf0oz7A7_400x400.jpg",
    },
    {
      name: "Rashmika",
      image:
        "https://www.filmibeat.com/img/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg",
      message: "Bharath u r Super 💞💞",
    },
    {
      message: "I miss u !!",
    },
    {
      message: "come on ..",
    },
  ]);

  const sendButton = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched on {new Date().toLocaleDateString()}{" "}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message} </p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message} </p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="chatScreen__inputField"
          type="text"
          placeholder="type a message..."
        />
        <button onClick={sendButton} className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
