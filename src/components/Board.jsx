import React, { Component } from "react";
import axios from "axios";
import Clue from "./Clue";

class Board extends Component {
    constructor(props) {
        super();
        this.state = {
            categories: [],
            clues: [],
            columns: [],
            resetBoard: false
        };

        this.createColumns = this.createColumns.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.getClues = this.getClues.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

        this.getCategories(parseInt(props.numOfCategories));
    }

    createColumns() {
        this.state.categories.map(category => {
            return (<div key={category.id}>
                        <header>{category.title}</header>
                        {this.state.clues}
                    </div>);
        });
    }

    getCategories(numOfCategories) {
        axios
            .get("http://jservice.io/api/categories", {
                params: {
                    count: numOfCategories
                }
            })
            .then(categories => {
                return this.setState({
                    categories: [...categories.data]
                });
            });
    }

    getClues(categoryId) {
        axios
            .get("http://jservice.io/api/clues", {
                params: {
                    category: categoryId
                }
            })
            .then(clues => {
                this.setState({
                    clues: clues.data.map(clue => {
                        return <Clue clueData={clue} />;
                    })
                });
            });
    }

    resetBoard() {
        alert("are you sure you want to start over with new categories and clues?");
        this.setState(prevState => ({
            resetBoard: !prevState.resetBoard
        }));
    }

    render() {
        return (
            <div>
                <div id="categories">
                    {this.state.columns}
                </div>
                <button onClick={this.resetBoard} type="button">
                    Reset Board
                </button>
            </div >
        );
    }
}

export default Board;
