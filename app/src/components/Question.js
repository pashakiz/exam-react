import React, {Component} from 'react';
import questions from '../questions';
import cards from '../tickets';

export default class Question extends Component {
    render() {

        const {ticketNum} = this.props;

        console.log('question', questions[0].text);
        console.log('card', cards.c1);

        return(
            <div className="exam-question">
                <div className="exam-question__header d-flex justify-content-between align-items-start">
                    <div className="exam__pagination">
                        <button className="btn btn__pagination correct">1</button>
                        <button className="btn btn__pagination wrong">2</button>
                        <button className="btn btn__pagination active">3</button>
                        <button className="btn btn__pagination">4</button>
                        <button className="btn btn__pagination">5</button>
                        <button className="btn btn__pagination">6</button>
                        <button className="btn btn__pagination">7</button>
                        <button className="btn btn__pagination">8</button>
                        <button className="btn btn__pagination">9</button>
                        <button className="btn btn__pagination">10</button>
                        <button className="btn btn__pagination">11</button>
                        <button className="btn btn__pagination">12</button>
                        <button className="btn btn__pagination">13</button>
                        <button className="btn btn__pagination">14</button>
                        <button className="btn btn__pagination">15</button>
                        <button className="btn btn__pagination">16</button>
                        <button className="btn btn__pagination">17</button>
                        <button className="btn btn__pagination">18</button>
                        <button className="btn btn__pagination">19</button>
                        <button className="btn btn__pagination">20</button>
                    </div>
                    <div className="exam__timer">
                        <div id="examtimer" className="examtimer">00:00</div>
                    </div>
                </div>
                <div className="exam-question__body">
                    <div className="exam-question__title d-flex justify-content-between align-items-start">
                        <div className="exam-question__titletxt">
                            <div className="exam-question__ticket-num">Билет №{ticketNum}</div>
                            <div className="exam-question__question-num">Вопрос 1</div>
                        </div>
                        <div className="exam__timer-mob">
                            <div id="examtimer-mob" className="examtimer">00:00</div>
                        </div>
                    </div>
                    <div className="exam-question__img">
                        <img src="img/tickets/01-02.jpg" alt="" />
                    </div>
                    <div className="exam-question__text">В каких направлениях вам разрешено продолжить движение?</div>
                    <div className="exam-question__answers">
                        <div className="custom-control custom-radio wrong">
                            <input type="radio" id="q0001-a1" className="custom-control-input" name="q0001" value="1"/>
                            <label className="custom-control-label" for="q0001-a1">Только Б.</label>
                        </div>
                        <div className="custom-control custom-radio correct">
                            <input type="radio" id="q0001-a2" className="custom-control-input" name="q0001" value="2"/>
                            <label className="custom-control-label" for="q0001-a2">*Только А и Б.</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="q0001-a3" className="custom-control-input" name="q0001" value="3"/>
                            <label className="custom-control-label" for="q0001-a3">В любых.</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="q0001-a4example" className="custom-control-input" name="q0001" value="0"/>
                            <label className="custom-control-label" for="q0001-a4example">Лишний ответ для примера.</label>
                        </div>
                    </div>
                </div>
                <div className="exam-question__footer">
                    <div className="d-sm-flex justify-content-between align-items-start">
                        <div className="exam-question__btns">
                            <button className="btn btn2 exam-question__btn exam-question__btn-submit">Ответить</button>
                            <button className="btn btn3 exam-question__btn exam-question__btn-next">Пропустить</button>
                        </div>
                        <button className="exam-prompt-btn">Подсказка</button>
                    </div>
                    <div className="exam-prompt">
                        <div className="exam-prompt__info">
                            <div className="exam-prompt__res">Правильно</div>
                            <div className="exam-prompt__text">текст подсказки</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}