import React from 'react';
import Timer from './Timer';
import questions from '../questions';

export default class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isQuestionTrue: null, //null, true, false
            ticketNum: this.props.ticketNum,
            allQuestions: this.props.allQuestions, //[num][id]
            checkedQuestions: this.props.checkedQuestions, //[num][true/false]
            questionNum: 0, //default first question of ticket
            answerBtnDisabled: true,
            isHelp: true,
            isHelpShown: false,
            timerData: null,
            timeOut: false
        };
    }

    sendQuestionData = () =>  {
        this.props.getQuestionData(this.state.ticketNum, this.state.checkedQuestions, this.state.timerData);
        console.log('Timer.sendTimerData:', this.state.min+':'+this.state.sec);
    };

    getTimerData = (timerData, timeOut) => {
        this.setState({ timerData: timerData, timeOut: timeOut});
        console.log('---Question.getTimerData: ', this.state.timerData, this.state.timeOut);
    };

    render() {
        console.log('1this.state.checkedQuestions: ',this.state.checkedQuestions);
        const noImage = 'img/noimage.png';
        const thisQuestionId = this.state.allQuestions[this.state.questionNum];
        const thisQuestion = questions[thisQuestionId];
        const checkedQuestions = this.state.checkedQuestions;

        let helpBtn = '';
        let helpHtml = '';
        let helpHtmlClasses = 'exam-prompt';
        let helpHtmlRes = '';
        if (checkedQuestions[this.state.questionNum] === true) {
            helpHtmlRes = 'Правильно';
            helpHtmlClasses = 'exam-prompt correct';
        }
        if (checkedQuestions[this.state.questionNum] !== true && checkedQuestions[this.state.questionNum] !== null) {
            helpHtmlRes = 'Ошибка';
            helpHtmlClasses = 'exam-prompt wrong';
        }
        let helpHtmlRow = checkedQuestions[this.state.questionNum] !== null ? <div className="exam-prompt__res">{helpHtmlRes}</div> : '';
        if (this.state.isHelp && thisQuestion.help) {
            helpBtn = (
                <button className="exam-prompt-btn" onClick={this.handleClickHelp}>Подсказка</button>
            );
            if (this.state.isHelpShown) {
                helpHtml = (
                    <div className={helpHtmlClasses}>
                        <div className="exam-prompt__info">
                            {helpHtmlRow}
                            <div className="exam-prompt__text">{thisQuestion.help}</div>
                        </div>
                    </div>
                );
            }
        }

        let answersHtml = [];
        for (let i = 0; i < thisQuestion.answer.length; i++) {
            let answerId = 'q'+thisQuestionId+'-a'+(i+1);
            let answerName = 'q'+thisQuestionId;

            if (checkedQuestions[this.state.questionNum] === null) {
                //unanswered
                answersHtml.push(
                    <div className="custom-control custom-radio" key={answerId}>
                        <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i}/>
                        <label className="custom-control-label" htmlFor={answerId} onClick={this.handleClickLabelAnswer}>{thisQuestion.answer[i]}</label>
                    </div>
                );
            } else {
                //answered
                if (checkedQuestions[this.state.questionNum] === true) {
                    //correct
                    if (i === thisQuestion.answerTrue) {
                        //highlight correct answer
                        answersHtml.push(
                            <div className="custom-control custom-radio correct" key={answerId}>
                                <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i} disabled="disabled" checked="checked"/>
                                <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                            </div>
                        );
                    } else {
                        //other answers not highlighted
                        answersHtml.push(
                            <div className="custom-control custom-radio" key={answerId}>
                                <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i} disabled="disabled"/>
                                <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                            </div>
                        );
                    }
                } else if (checkedQuestions[this.state.questionNum] !== true && checkedQuestions[this.state.questionNum] !== null) {
                    //wrong
                    if (i === checkedQuestions[this.state.questionNum]) {
                        //highlight wrong answer
                        answersHtml.push(
                            <div className="custom-control custom-radio wrong" key={answerId}>
                                <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i} disabled="disabled" checked="checked"/>
                                <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                            </div>
                        );
                    } else if (i === thisQuestion.answerTrue) {
                        //highlight correct answer
                        answersHtml.push(
                            <div className="custom-control custom-radio correct" key={answerId}>
                                <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i} disabled="disabled"/>
                                <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                            </div>
                        );
                    } else {
                        //other answers not highlighted
                        answersHtml.push(
                            <div className="custom-control custom-radio" key={answerId}>
                                <input type="radio" id={answerId} className="custom-control-input" name={answerName} value={i} disabled="disabled"/>
                                <label className="custom-control-label" htmlFor={answerId}>{thisQuestion.answer[i]}</label>
                            </div>
                        );
                    }
                }
            }
        }

        let paginationHtml = [];
        for (let i = 1; i <= this.state.allQuestions.length; i++) {
            if (i === this.state.questionNum+1) {
                paginationHtml.push(
                    <button className="btn btn__pagination active" key={i}>{i}</button>
                );
            } else if (checkedQuestions[i-1] === true) {
                paginationHtml.push(
                    <button className="btn btn__pagination correct" key={i} onClick={this.handleClickOpenQuestion.bind(this, i-1)}>{i}</button>
                );
            } else if(checkedQuestions[i-1] !== true && checkedQuestions[i-1] !== null) {
                paginationHtml.push(
                    <button className="btn btn__pagination wrong" key={i} onClick={this.handleClickOpenQuestion.bind(this, i-1)}>{i}</button>
                );
            } else {
                paginationHtml.push(
                    <button className="btn btn__pagination" key={i} onClick={this.handleClickOpenQuestion.bind(this, i-1)}>{i}</button>
                );
            }
            /*else2: wrong question mark*/
            /*else3: correct question mark*/
        }

        let timerClasses = 'examtimer';
        if (this.state.timeOut) {
            timerClasses = 'examtimer examtimer_overrun';
        }

        return(
            <div className="exam-question">
                <div className="exam-question__header d-flex justify-content-between align-items-start">
                    <div className="exam__pagination">
                        {paginationHtml}
                    </div>
                    <div className="exam__timer">
                        <Timer getTimerData={this.getTimerData} />
                    </div>
                </div>
                <div className="exam-question__body">
                    <div className="exam-question__title d-flex justify-content-between align-items-start">
                        <div className="exam-question__titletxt">
                            <div className="exam-question__ticket-num">Билет №{this.state.ticketNum}</div>
                            <div className="exam-question__question-num">Вопрос {this.state.questionNum+1}</div>
                        </div>
                        <div className="exam__timer-mob">
                            <div className={timerClasses}>
                                {this.state.timerData}
                            </div>
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
                            <button className="btn btn2 exam-question__btn exam-question__btn-submit"
                                    onClick={this.handleClickAnswerCheck.bind(this, thisQuestionId, thisQuestion.answerTrue)}
                                    disabled={this.state.answerBtnDisabled}>Ответить</button>
                            <button className="btn btn3 exam-question__btn exam-question__btn-next"
                                    onClick={this.handleClickOpenQuestion.bind(this, this.state.questionNum+1)}>Пропустить</button>
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
                questionNum: num,
                isHelpShown: false
            });
        }
    };

    handleClickLabelAnswer = () => this.setState({
        answerBtnDisabled: false
    });

    handleClickHelp = () => this.setState({
        isHelpShown: !this.state.isHelpShown
    });

    handleClickAnswerCheck = (thisQuestionId, answerTrue) => {
        let questionNum = this.state.questionNum;
        let answer = document.getElementsByName('q'+thisQuestionId);
        let chosenAnswer = null;
        let isAnswerTrue = null;
        let checkedQuestions = this.state.checkedQuestions;

        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                chosenAnswer = +answer[i].value;
                console.log('chosenAnswer:', chosenAnswer);
                break;
            }
        }

        if(chosenAnswer === answerTrue) {
            console.log('correct');
            isAnswerTrue = true;
        } else {
            console.log('wrong');
            isAnswerTrue = chosenAnswer;
        }

        checkedQuestions[questionNum] = isAnswerTrue;

        this.setState({
            checkedQuestions: checkedQuestions,
            answerBtnDisabled: true
        });
        console.log('2this.state.checkedQuestions: ',this.state.checkedQuestions);
    };

    checkTicketFinished() {
        //
    }
}