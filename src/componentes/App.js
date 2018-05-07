import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import Table from './Table'
import shuffle from './shuffle.js'

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = State()
  }

  seleccionada(carta) {
    const parejas = [...this.state.parejas, carta];

    if (this.state.parejas.indexOf(carta) > -1 || carta.acerto || this.state.comparadas) {
      return;
    }

    if (parejas.length === 2) {
      this.comparar(parejas)
    }

    this.setState({
      parejas
    })
    
  }

  comparar(parejas) {

    this.setState({ comparadas: true });
    setTimeout(() => {

      let cards = this.state.cards;
      const [carta1, carta2] = parejas;
      if (carta1.img === carta2.img) {
        cards = cards.map((card) => {
          if (card.img !== carta1.img) {
            return card
          }
          return { ...card, acerto: true, ocultar: true }
        })
      }
      this.ganador(cards);

      this.setState({
        cards,
        parejas: [],
        comparadas: false,
      })
    }, 1500)

  }

  ganador(cards) {
    if (cards.filter((card) => !card.acerto).length === 0) {
      alert('Bien!! Lo hiciste!');
    }
  }

  jugarDenuevo() {
    this.setState(
      State()
    );
  }

  render() {
    return (
      <div>
        <Header/>
        <Table cards={this.state.cards} seleccionada={(carta) => this.seleccionada(carta)} parejas={this.state.parejas}/>
        <Footer jugarDenuevo={() => this.jugarDenuevo()}/>
      </div>
    );
  }
}

const State = () => {
  const cards = shuffle();
  return {
    cards,
    comparadas: false,
    parejas: []
  }
}

export default App;
