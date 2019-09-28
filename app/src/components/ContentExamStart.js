import React, {Component} from 'react';

export default class ContentExamStart extends Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabExam') {
            body = (
                <div className="exam__random">
                    <p>На экзамен даётся 20 минут.<br/>Внимательно читайте каждый вопрос и все варианты ответов.<br/>Не торопитесь. Удачи!</p>
                    <button className="btn btn2" id="exam-random-start">НАЧАТЬ</button>
                </div>
            );
        }

        return(
            <div className="exam__content exam__content_exam active">
                {body}
            </div>
        )
    }
}