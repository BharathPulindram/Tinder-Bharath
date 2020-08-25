import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Night sky ..",
      url:
        "https://thumbs.dreamstime.com/b/beautiful-scenery-colorful-sky-water-reflectioncloud-clouds-sunbeams-artistic-picture-beauty-world-panorama-155610959.jpg",
    },
    {
      name: "Beautiful Landscape",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxnYAgpta47NFuipPskPIbSgUPMUFBB1bwEQ&usqp=CAU",
    },
    {
      name: "Hamsa Viharam !!",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzuPllY457tL_hwEIotQhzFzqIiyNaBOELsA&usqp=CAU",
    },
    {
      name: "Beautiful Nature blis",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhjWTBEwj2r9jysHfhPglu9WXpTC_OitWMvA&usqp=CAU",
    },
    {
      name: "Bharath",
      url:
        "https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE_400x400.jpg",
    },
    {
      name: "Nature",
      url:
        "https://lh3.googleusercontent.com/proxy/DzXOxI9Oq-plogoB5I6cWcrWBXSlZEHzua4EASc3zUAW3j4xyRdB5QJW7gMTu89wLvJqOPxK15hOugPPFuIyFhadnQ3yiYyzRHXYPOlQFWRmt05w7V7gafXzDrrTDmI",
    },
    {
      name: "Nature Landscape Mountains..",
      url:
        "https://cdn.pixabay.com/photo/2017/12/08/11/28/nature-3005607_960_720.jpg",
    },
    {
      name: "Beautiful scenery",
      url:
        "https://i.pinimg.com/originals/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg",
    },
  ]);
  /* useEffect(() => {
    //use firebase db!! if require
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []); */

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
