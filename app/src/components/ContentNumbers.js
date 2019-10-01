import React, {Component} from 'react';
import Question from './Question';
import cards from '../tickets';

export default class ContentNumbersStart extends Component {

    state = {
        isStart: this.props,
        isQuestion: false,
        isResult: false,
        ticketNum: 0
    };

    render() {


        const {tabOpen} = this.props;
        let body = '';

        if (this.state.isQuestion && this.state.ticketNum>0) {
            let allQuestions = cards['c'+this.state.ticketNum];
            let checkedQuestions = [];
            for (let i = 0; i < allQuestions.length; i++) {
                checkedQuestions.push(null);
            }
            body = <Question ticketNum={this.state.ticketNum} allQuestions={allQuestions} checkedQuestions={checkedQuestions} />;
        }

        if (this.state.isResult) {
            body = <div>Result</div>;
        }

        if (tabOpen === 'tabNumbers' && !this.state.isQuestion && !this.state.isResult) {
            console.log('tabOpen === tabNumbers');

            let buttons = [];
            for (let i=1; i<=20; i++) {
                buttons.push(
                    <tr key={i}>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i)}>Билет №{i}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+20)}>Билет №{i+20}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+40)}>Билет №{i+40}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+60)}>Билет №{i+60}</button>
                        </td>
                    </tr>
                );
            }

            body = (
                <div className="exam__cardstable">
                    <table className="cardstable">
                        <tbody>
                            {buttons}
                        </tbody>
                    </table>
                </div>
            );
        }

        return(
            <div className="exam__content exam__content_numbers active">
                {body}
            </div>
        )
    }

    handleClick = (i) => {
        this.setState({
            isQuestion: true,
            ticketNum: i
        });
    }

}