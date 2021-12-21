import React from "react";
import "./Card.css";
import { useState } from "react";

export default function Card() {
  const skeletonCard = () => {
    return (
      <div className='card'>
        <div className='shade'></div>
      </div>
    );
  };

  const requestURL = "project-data.json";
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    window.addEventListener("load", () => {
      const Data = request.response;
      generateCards(Data);
    });
  };

  const [initialCards, setCards] = useState(skeletonCard);

  const generateCards = (Data) => {
    let newCards = [];

    for (let i = 0; i < Data.length; i++) {
      newCards.push(
        <div className='card' key={Data[i].name}>
          <h3 className='bow'>{Data[i].name}</h3>
          <div className='textcontainer'>
            <img
              className='card_img'
              src={Data[i].imgSrc}
              alt={Data[i].name + "Logo"}
            />
            <p>{Data[i].description}</p>
            <div className='card_link_cont'>
              <a className='card_link' href={Data[i].codeLink}>
                Código
              </a>
              <a className='card_link' href={Data[i].liveLink}>
                Sitio
              </a>
            </div>
          </div>
        </div>
      );
    }
    setCards(newCards);
  };

  return <div className='cards'>{initialCards}</div>;
}
