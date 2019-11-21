import React, { Component } from 'react';

class Clue extends Component {
    constructor() {
        super();

        this.loadClue = this.loadClue.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.clueData.question}
            </div>
        );
    }
}

export default Clue;