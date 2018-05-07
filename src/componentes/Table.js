import React from 'react';
import Card from './Card'
import '../css/table.css'

const Table = ({cards,parejas,seleccionada}) => {

  const cardsMap = () => {
    cards.map((card, i) => {
      const comparando = parejas.indexOf(card) > -1;
      return <Card key={i} img={card.img} seleccionada={() => seleccionada(card)} comparando={comparando} acerto={card.acerto}/>
    })
  }
  
  return (
    <div className="table">
      {cardsMap}
    </div>
  );
}

export default Table;
