import Flipcard from "react-flipcard";
import React from 'react';
import '../css/card.css'

const Card = ({seleccionada, comparando, acerto, img}) => {

  const css = { visibility: visible };

  if(acerto){
   const visible = 'hidden'
  } else {
    const visible = 'visible'
  }

  return (
    <div className="card" onClick = {seleccionada}>
      <Flipcard flipped={comparando || acerto} disabled={true}>
        <div className="portada"></div>
        <div className="back">
          <img className="img" src={img} style={css}/>
        </div>
      </Flipcard>
    </div>
  );
}

export default Card;
