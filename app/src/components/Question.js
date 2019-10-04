import React from 'react';
import classNames from 'classnames';
import Timer from './Timer';
import {myConst} from '../const';
import questions from '../questions';

export default class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            examMode: this.props.examMode,
            isQuestionTrue: null, //null, true, false
            ticketNum: this.props.ticketNum,
            chosenTopicNums: this.props.chosenTopicNums,
            allQuestions: this.props.allQuestions, //[num][id]
            checkedQuestions: this.props.checkedQuestions, //[num][true/false]
            questionNum: 0, //default first question of ticket
            answerBtnDisabled: true,
            isHelp: this.props.isHelp,
            isHelpShown: false,
            timerData: null,
            timeOut: false
        };
    }

    getTimerData = (timerData, timeOut) => {
        this.setState({ timerData: timerData, timeOut: timeOut});
    };

    render() {

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

        let timerClasses = 'examtimer';
        if (this.state.timeOut) {
            timerClasses = 'examtimer examtimer_overrun';
        }

        let paginationHtml = [];
        if (this.state.allQuestions.length > myConst.QUESTIONS_PER_TICKET) { //topics
            for (let i = 1; i <= this.state.allQuestions.length; i++) {
                if (i <= myConst.QUESTIONS_PER_TICKET) {
                    if (i === 1) { //1th
                        paginationHtml.push(
                            <button className={classNames('btn btn__pagination',
                                    { active: (i === this.state.questionNum+1) },
                                    { correct: (checkedQuestions[i-1] === true) },
                                    { wrong: (checkedQuestions[i-1] !== true && checkedQuestions[i-1] !== null) },
                                    { wide: (i > 99) },
                                )}
                                key={i} onClick={(i !== this.state.questionNum+1) ? this.handleClickOpenQuestion.bind(this, i-1) : function(){} } >{i}</button>
                        );
                    } else if (i === 2 && this.state.questionNum+1 > myConst.QUESTIONS_PER_TICKET-10) { //2th
                        paginationHtml.push(
                            <button className='btn btn__pagination'
                                    key={i}>...</button>
                        );
                    } else if (i === myConst.QUESTIONS_PER_TICKET) { //20th
                        paginationHtml.push(
                            <button className={classNames('btn btn__pagination',
                                    { active: (this.state.allQuestions.length === this.state.questionNum+1) },
                                    { correct: (checkedQuestions[this.state.allQuestions.length-1] === true) },
                                    { wrong: (checkedQuestions[this.state.allQuestions.length-1] !== true && checkedQuestions[this.state.allQuestions.length-1] !== null) },
                                    { wide: (this.state.allQuestions.length > 99) },
                                )}
                                key={this.state.allQuestions.length} onClick={(i !== this.state.questionNum+1) ? this.handleClickOpenQuestion.bind(this, this.state.allQuestions.length-1) : function(){}}>{this.state.allQuestions.length}</button>
                        );
                    } else  if (i === myConst.QUESTIONS_PER_TICKET-1) { //19th
                        paginationHtml.push(
                            <button className='btn btn__pagination'
                                    key={i}>...</button>
                        );
                    } else if (this.state.questionNum+1 > myConst.QUESTIONS_PER_TICKET-10) {
                        let diff = (this.state.questionNum+1) - (myConst.QUESTIONS_PER_TICKET-10);
                        let iDiff = i + diff;
                        console.log(diff);
                        paginationHtml.push(
                            <button className={classNames('btn btn__pagination',
                                    { active: (iDiff === this.state.questionNum+1) },
                                    { correct: (checkedQuestions[iDiff-1] === true) },
                                    { wrong: (checkedQuestions[iDiff-1] !== true && checkedQuestions[iDiff-1] !== null) },
                                    { wide: (i > 99) },
                                )}
                                key={iDiff} onClick={(iDiff !== this.state.questionNum+1) ? this.handleClickOpenQuestion.bind(this, iDiff-1) : function(){} } >{iDiff}</button>
                        );
                    } else {
                        paginationHtml.push(
                            <button className={classNames('btn btn__pagination',
                                    { active: (i === this.state.questionNum+1) },
                                    { correct: (checkedQuestions[i-1] === true) },
                                    { wrong: (checkedQuestions[i-1] !== true && checkedQuestions[i-1] !== null) },
                                    { wide: (i > 99) },
                                )}
                                key={i} onClick={(i !== this.state.questionNum+1) ? this.handleClickOpenQuestion.bind(this, i-1) : function(){} } >{i}</button>
                        );
                    }
                }
            }
        } else { //tickets
            for (let i = 1; i <= this.state.allQuestions.length; i++) {
                paginationHtml.push(
                    <button className={classNames('btn btn__pagination',
                            { active: (i === this.state.questionNum+1) },
                            { correct: (checkedQuestions[i-1] === true) },
                            { wrong: (checkedQuestions[i-1] !== true && checkedQuestions[i-1] !== null) },
                            { wide: (i > 99) },
                        )}
                        key={i} onClick={(i !== this.state.questionNum+1) ? this.handleClickOpenQuestion.bind(this, i-1) : function(){} }>{i}</button>
                );
            }
        }

        let questionTitle = '';
        let timerHtml = '';
        if (this.state.examMode === 'ticket') {

            questionTitle = (
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
            );

            timerHtml = (
                <div className="exam__timer">
                    <Timer getTimerData={this.getTimerData} />
                </div>
            );

        } else if (this.state.examMode === 'topic') {
            questionTitle = '';
            timerHtml = '';
        }

        let btnNext = 'Пропустить';
        if (checkedQuestions[this.state.questionNum] !== null && checkedQuestions[this.state.questionNum] !== true) {
            btnNext = 'Продолжить';
        }

        return(
            <div className="exam-question">
                <div className="exam-question__header d-flex justify-content-between align-items-start">
                    <div className="exam__pagination">
                        {paginationHtml}
                    </div>
                    {timerHtml}
                </div>
                <div className="exam-question__body">
                    {questionTitle}
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
                                    onClick={this.handleClickOpenQuestion.bind(this, this.state.questionNum+1)}>{btnNext}</button>
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
                break;
            }
        }

        if(chosenAnswer === answerTrue) {
            isAnswerTrue = true;
        } else {
            isAnswerTrue = chosenAnswer;
        }

        checkedQuestions[questionNum] = isAnswerTrue;

        this.setState({
            checkedQuestions: checkedQuestions,
            answerBtnDisabled: true
        });

        if (isAnswerTrue === true) {
            this.handleClickOpenQuestion(questionNum+1);
        }

        this.checkTicketFinished();
    };

    checkTicketFinished() {
        let count = 0;
        for (let i = 0; i < this.state.checkedQuestions.length; i++){
            if (this.state.checkedQuestions[i] !== null) {
                count++;
            }
        }

        if (count === this.state.checkedQuestions.length) {
            //ticked end
            if (this.state.examMode === 'ticket') {
                this.props.getQuestionData(this.state.ticketNum, this.state.checkedQuestions, this.state.timerData, this.state.timeOut);
            } else if (this.state.examMode === 'topic') {
                this.props.getQuestionData(this.state.chosenTopicNums, this.state.checkedQuestions, this.state.timerData, this.state.timeOut);
            }
        }
    }
}