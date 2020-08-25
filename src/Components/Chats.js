import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Bharath"
        message="Hey !! how r u"
        timestamp="1 minutes ago"
        profilePic="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE_400x400.jpg"
      />
      <Chat
        name="Kajal"
        message="Love u guys !!"
        timestamp="25 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwjhWnWK2G7FAtLGlhQKXrKJ6tImRHwp10Dw&usqp=CAU"
      />
      <Chat
        name="Shradha Kapoor"
        message="Crazy dude.."
        timestamp="5 minutes ago"
        profilePic="https://pbs.twimg.com/profile_images/1256500530244960257/Gf0oz7A7_400x400.jpg"
      />
      <Chat
        name="Rashmika"
        message="See u soon"
        timestamp="7 minutes ago"
        profilePic="https://www.filmibeat.com/img/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg"
      />
    </div>
  );
}

export default Chats;
