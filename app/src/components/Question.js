import React, {Component} from 'react';
import questions from '../questions';
import cards from '../tickets';

export default class Question extends Component {
    render() {

        //const {tabOpen} = this.props;

        console.log('question', questions[0].text);
        console.log('card', cards.c1);

        return(
            <div className="exam-question">
                Question
            </div>
        )
    }
}