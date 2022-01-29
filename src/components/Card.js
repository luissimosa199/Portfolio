import React from "react";
import "./Card.css";
import { useState } from "react";
import jsonData from "./project-data.json";

export default function Card() {
  const [initialCards, setCards] = useState(
    <div className='card'>
      <div className='shade'></div>
    </div>
  );

    let projects = [];

    jsonData.forEach((e) => {
      projects.push(<div className='card' key={e.name}>
      <h3 className='bow'>{e.name}</h3>
      <div className='textcontainer'>
        <img
          className='card_img'
          src={e.imgSrc}
          alt={e.name + "Logo"}
        />
        <p>{e.description}</p>
        <div className='card_link_cont'>
          <a className='card_link' href={e.codeLink}>
            Código
          </a>
          <a className='card_link' href={e.liveLink}>
            Sitio
          </a>
        </div>
      </div>
    </div>)
    })

    window.addEventListener('load', () => {
      setCards(projects)
    })

  return <div className='cards'>{initialCards}</div>;
}
