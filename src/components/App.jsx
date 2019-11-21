import ReactDOM from "react-dom";
import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardComponent: null
    };
    this.createBoard = this.createBoard.bind(this);
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
        {this.state.boardComponent}
      </div>
    );
  }
}

export default App;