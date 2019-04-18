import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = {
    lists: [
      { 
        id: null,
        header: '',
        cardIds: []
       }
    ],
    allCards: [
      {
        '': { id: null, title: '', content: '' }
      }
    ]
  }

  deleteCard = (id) => {
    this.setState( { lists: [...this.state.lists.filter(card => this.allCards.id !== id)] })
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  addCard = () => {
    console.log('clicked')
      this.setState( { allCards: [...this.state.allCards, this.newRandomCard()] })
    }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onAdd={this.addCard}
            />
          ))}
        </div>
      </main>
    );
  }
}


export default App;
