import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  constructor() {
    super();

    this.state = {
      boardComponent: null
    };
    
    this.createBoard = this.createBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  createBoard(e) {
    e.preventDefault();

    let numOfCategories = e.target.numOfCategories.value;
    let numOfClues = e.target.numOfClues.value;

    this.setState({
      boardComponent: (
        <Board numOfCategories={numOfCategories} numOfClues={numOfClues} />
      )
    });
  }

  resetBoard() {
      alert("are you sure you want to start over with new categories and clues?");
      this.setState({
          boardComponent: null
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createBoard}>
          <p>
            <label>Enter number of categories</label>
            <input type="number" name="numOfCategories" />
          </p>
          <p>
            <label>Enter number of clues</label>
            <input type="number" name="numOfClues" />
          </p>
          <button type="submit">Start the game</button>
        </form>
        <button onClick={this.resetBoard} type="button">
            Reset Board
        </button>
        {this.state.boardComponent}
      </div>
    );
  }
}

export default App;