import React, { Component } from "react";
import axios from "axios";
import Clue from "./Clue";
import '../styles/Board.css';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            clues: [],
            columns: []
        };

        this.createColumns = this.createColumns.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.getClues = this.getClues.bind(this);
    }

    componentDidMount() {
        this.getCategories(parseInt(this.props.numOfCategories));
    }

    createColumns() {
        let columnTemplates = this.state.categories.map((category) => {
            let categoryClues = this.getClues(category.id);

            categoryClues.then(clues => {
                return this.setState(prevState => ({
                    columns: prevState.columns.concat(<div className="col" key={category.id}>
                        <header>{category.title}</header>
                        {clues.map(clue => {
                            return (<Clue key={clue.id} clueData={clue} />)
                        })}
                    </div>)
                }))

            });
        });

        return columnTemplates;
    }

    getCategories(numOfCategories) {
        axios
            .get("http://jservice.io/api/categories", {
                params: {
                    count: numOfCategories
                }
            })
            .then(categories => {
                this.setState({
                    categories: [...categories.data]
                });

                this.createColumns();
            });
    }

    async getClues(categoryId) {
        let response = await axios
            .get("http://jservice.io/api/clues", {
                params: {
                    category: parseInt(categoryId)
                }
            });

        return await response.data.slice(0, parseInt(this.props.numOfClues));
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.columns}
                </div>
            </div >
        );
    }
}

export default Board;
