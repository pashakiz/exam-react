import React from 'react';
import Question from './Question';
import Result from './Result';
import cards from '../tickets';

export default class ContentNumbers extends React.Component {

    state = {
        isQuestion: false,
        isResult: false,
        ticketNum: 0,
        checkedQuestions: [],
        checkedTicked: null
    };

    handleRestart = () => {
        //update component - нажата кнопка НАЗАД в Result
        console.log('ContentNumber: нажата кнопка НАЗАД в Result');
        this.setState({
            isQuestion: false,
            isResult: false,
            ticketNum: 0,
            checkedQuestions: [],
            checkedTicked: null,
            timerData: null
        });
    };

    getQuestionData = (checkedTicked, checkedQuestions, timerData) => {
        this.setState({
            isResult: true,
            checkedQuestions: checkedQuestions,
            checkedTicked: checkedTicked,
            timerData: timerData
        });
        console.log('----ContentNumbers.getQuestionData.timerData: ', timerData);
        console.log('----ContentNumbers.getQuestionData.checkedTicked: ', checkedTicked);
        console.log('----ContentNumbers.getQuestionData.checkedQuestions: ', checkedQuestions);
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
            body = <Question ticketNum={this.state.ticketNum}
                             allQuestions={allQuestions}
                             checkedQuestions={checkedQuestions}
                             getQuestionData={this.getQuestionData}/>;
        }

        if (this.state.isResult && this.state.checkedQuestions.length) {
            body = <Result checkedQuestions={this.state.checkedQuestions}
                           checkedTicked={this.state.checkedTicked}
                           handleRestart={this.handleRestart.bind(this)}
                           timerData={this.state.timerData}/>;
        }

        if (tabOpen === 'tabNumbers' && !this.state.isQuestion && !this.state.isResult) {
            let buttons = [];
            for (let i=1; i<=20; i++) {
                buttons.push(
                    <tr key={i}>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket"
                                    onClick={this.handleClick.bind(this, i)}>Билет №{i}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket"
                                    onClick={this.handleClick.bind(this, i+20)}>Билет №{i+20}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket"
                                    onClick={this.handleClick.bind(this, i+40)}>Билет №{i+40}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket"
                                    onClick={this.handleClick.bind(this, i+60)}>Билет №{i+60}</button>
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