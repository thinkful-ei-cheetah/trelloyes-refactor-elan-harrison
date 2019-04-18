import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {

  state = {
    lists: [],
    allCards: {}
  }

  componentDidMount() {
    this.setState({
      lists: this.props.store.lists,
      allCards: this.props.store.allCards
    })
  }

  deleteCard = (cardId) => {
    // const card = document.getElementById(e.currentTarget)
    const newList = this.state.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    })
    console.log(cardId)
    this.setState({
      lists: newList,
      allCards: {
        ...this.state.allCards
      }
    });
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    console.log(id)
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  addCard = (listId) => {
    console.log('clicked')
    const newCard = this.newRandomCard();
    const newList = this.state.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id)
      }
      return list
    })
    console.log(newList)
    this.setState({
      lists: newList,
      allCards: {
        ...this.state.allCards, [newCard.id]: newCard
      }
    })
  }

  render() {

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onAdd={this.addCard}
              onDelete={this.deleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}


export default App;
