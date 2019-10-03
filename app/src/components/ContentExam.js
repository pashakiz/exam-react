import React from 'react';
import {myConst} from '../const';

export default class ContentExam extends React.Component {

    state = {
        isQuestion: false,
        isResult: false,
        ticketNum: 0
    };

    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabExam') {
            body = (
                <div className="exam__random">
                    <p>На экзамен даётся 20 минут.<br/>Внимательно читайте каждый вопрос и все варианты ответов.<br/>Не торопитесь. Удачи!</p>
                    <button className="btn btn2 btn_start" onClick={this.handleClick}>НАЧАТЬ</button>
                </div>
            );
        }

        return(
            <div className="exam__content exam__content_exam active">
                {body}
            </div>
        )
    }

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    handleClick = () => {
        let num = this.randomInteger(1, myConst.ALL_TICKETS_NUM);
        this.setState({
            isQuestion: true,
            ticketNum: num
        });
    }
}