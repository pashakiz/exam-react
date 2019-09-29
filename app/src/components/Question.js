import React, {Component} from 'react';
import questions from '../questions';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: 'clean', //'clean', 'true', 'false'
            ticketNum: this.props.ticketNum,
            allQuestions: this.props.allQuestions,
            questionNum: 0, //default first question of ticket
            isHelp: true
        };
    }

    render() {
        const noImage = 'img/noimage.png';
        const thisQuestionId = this.state.allQuestions[this.state.questionNum];
        const thisQuestion = questions[thisQuestionId];

        let helpBtn = '';
        let helpHtml = '';
        let helpHtmlRes = '';
        if (this.state.question === 'true') {helpHtmlRes = 'Правильно'}
        if (this.state.question === 'false') {helpHtmlRes = 'Ошибка'}
        let helpHtmlRow = this.state.question !== 'clean' ? <div className="exam-prompt__res">{helpHtmlRes}</div> : '';
        if (this.state.isHelp && thisQuestion.help) {
            helpBtn = (
                <button className="exam-prompt-btn">Подсказка</button>
            );
            helpHtml = (
                <div className="exam-prompt">
                    <div className="exam-prompt__info">
                        {helpHtmlRow}
                        <div className="exam-prompt__text">{thisQuestion.help}</div>
                    </div>
                </div>
            );
        }

        let answersHtml = [];
        for (let i = 0; i < thisQuestion.answer.length; i++) {
            let answerId = 'q'+thisQuestionId+'-a'+(i+1);
            let answerName = 'q'+thisQuestionId;

            /*add classes to .custom-control.custom-radio: wrong, correct*/
            answersHtml.push(
                <div className="custom-control custom-radio" key={answerId}>
                    <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i+1}/>
                    <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                </div>
            );
        }

        let paginationHtml = [];
        for (let i = 1; i <= this.state.allQuestions.length; i++) {
            if (i === this.state.questionNum+1) {
                paginationHtml.push(
                    <button className="btn btn__pagination active" key={i}>{i}</button>
                );
            } else {
                paginationHtml.push(
                    <button className="btn btn__pagination" key={i} onClick={this.handleClickOpenQuestion.bind(this, i-1)}>{i}</button>
                );
            }
            /*else2: wrong question mark*/
            /*else3: correct question mark*/
        }

        return(
            <div className="exam-question">
                <div className="exam-question__header d-flex justify-content-between align-items-start">
                    <div className="exam__pagination">
                        {paginationHtml}
                    </div>
                    <div className="exam__timer">
                        <div id="examtimer" className="examtimer">00:00</div>
                    </div>
                </div>
                <div className="exam-question__body">
                    <div className="exam-question__title d-flex justify-content-between align-items-start">
                        <div className="exam-question__titletxt">
                            <div className="exam-question__ticket-num">Билет №{this.state.ticketNum}</div>
                            <div className="exam-question__question-num">Вопрос {this.state.questionNum+1}</div>
                        </div>
                        <div className="exam__timer-mob">
                            <div id="examtimer-mob" className="examtimer">00:00</div>
                        </div>
                    </div>
                    <div className="exam-question__img">
                        <img src={thisQuestion.img ? thisQuestion.img : noImage} alt="" />
                    </div>
                    <div className="exam-question__text">{thisQuestion.text}</div>
                    <div className="exam-question__answers">
                        {answersHtml}
                    </div>
                </div>
                <div className="exam-question__footer">
                    <div className="d-sm-flex justify-content-between align-items-start">
                        <div className="exam-question__btns">
                            <button className="btn btn2 exam-question__btn exam-question__btn-submit">Ответить</button>
                            <button className="btn btn3 exam-question__btn exam-question__btn-next" onClick={this.handleClickOpenQuestion.bind(this, this.state.questionNum+1)}>Пропустить</button>
                        </div>
                        {helpBtn}
                    </div>
                    {helpHtml}
                </div>
            </div>
        )
    }

    handleClickOpenQuestion = (num) => {
        if(num <= this.state.allQuestions.length-1) {
            this.setState({
                questionNum: num
            });
        }
    }
}