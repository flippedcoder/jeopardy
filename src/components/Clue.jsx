import React, { Component } from 'react';
import '../styles/Clue.css';

class Clue extends Component {
    constructor() {
        super();
        this.state = {
            showValue: true,
            showQuestion: false,
            text: 'Question'
        };

        this.toggleShowValue = this.toggleShowValue.bind(this);
        this.toggleShowQuestion = this.toggleShowQuestion.bind(this);
        this.showValueOrQuestion = this.showValueOrQuestion.bind(this);
    }

    showValueOrQuestion () {
        if (this.state.text === 'Question') {
            this.toggleShowQuestion();
        }
        else {
            this.toggleShowValue();
        }
    }

    toggleShowValue(e) {
        this.setState(prevState => ({
            showValue: !prevState.showValue,
            showQuestion: !prevState.showQuestion,
            text: 'Question'
        }));
    }

    toggleShowQuestion(e) {
        this.setState(prevState => ({
            showValue: !prevState.showValue,
            showQuestion: !prevState.showQuestion,
            text: 'Value'
        }));
    }

    render() {
        return (
            <div className='clue'>
                <p className={(this.state.showValue ? 'show' : 'hidden')}>{this.props.clueData.value}</p>
                <p className={(this.state.showQuestion ? 'show' : 'hidden')}>{this.props.clueData.question}</p>
                <button type="button" onClick={this.showValueOrQuestion}>Show {this.state.text}</button>
            </div>
        );
    }
}

export default Clue;