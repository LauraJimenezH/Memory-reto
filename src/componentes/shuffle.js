import Data from './Data.js';
import shuffle from 'lodash.shuffle';

const NUMERO_CARTAS = 8;

export default () => {
    
    const datacartas = Data();
    let cartas = [];

    while(cartas.length < NUMERO_CARTAS){
        const i = Math.floor(Math.random() * datacartas.length);
        const card = {
            img: 'http://www.reneperezvallines.esy.es/javascript/juego_cartas/IMG/'+ datacartas.splice(i, 1)[0]+'.png',
            acerto: false
        };
        cartas.push(card);
        cartas.push({...card});
    }

    return shuffle(cartas);
};