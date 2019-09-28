import React, {Component} from 'react';
//import classNames from 'classnames';


class TabContent extends Component {
    render() {

        const {questions, tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabExam') {
            body = (
                <div className="exam__content exam__content_exam active">
                    <div className="exam__random">
                        <p>На экзамен даётся 20 минут.<br/>Внимательно читайте каждый вопрос и все варианты ответов.<br/>Не торопитесь. Удачи!</p>
                        <button className="btn btn2" id="exam-random-start">НАЧАТЬ</button>
                    </div>
                </div>
            );
        }
        if (tabOpen === 'tabNumbers') {
            body = (
                <div className="exam__content exam__content_numbers active">
                    <div className="exam__cardstable">
                        <table className="cardstable">
                            <tbody>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                                </td>
                                <td className="cardstable__td">
                                    <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        if (tabOpen === 'tabTopics') { //dd
            body = (
                <div className="exam__content exam__content_topics active">
                    <div className="exam__bytopics">
                        <div className="col-topic-title text-center">
                            <div className="h3">Работа над ошибками по темам</div>
                            <p>Выберите нужную вам тему (или несколько) и нажмите кнопку &laquo;Начать&raquo;</p>
                        </div>
                        <div className="d-sm-flex justify-content-center align-items-start">
                            <div className="col-topics">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic01" value="1" />
                                        <label className="custom-control-label" for="topic01">1. Общие положения</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic02" value="2" />
                                        <label className="custom-control-label" for="topic02">2. Обязанности и права водителей механических транспортных средств</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic03" value="3" />
                                        <label className="custom-control-label" for="topic03">3. Движение транспортных средств со специальными сигналами</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic04" value="4" />
                                        <label className="custom-control-label" for="topic04">4. Обязанности и права пешеходов</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic05" value="4" />
                                        <label className="custom-control-label" for="topic05">5. Обязанности и права пассажиров</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic06" value="6" />
                                        <label className="custom-control-label" for="topic06">6. Требования к велосипедистам</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic07" value="7" />
                                        <label className="custom-control-label" for="topic07">7. Требования к лицам, управляющим гужевым транспортом и погонщикам животных</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic08" value="8" />
                                        <label className="custom-control-label" for="topic08">8. Регулирование дорожного движения</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic09" value="9" />
                                        <label className="custom-control-label" for="topic09">9. Предупреждающие сигналы</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic10" value="10" />
                                        <label className="custom-control-label" for="topic10">10. Начало движения и изменение его направления</label>
                                </div>
                            </div>
                            <div className="col-topics">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic21" value="21" />
                                        <label className="custom-control-label" for="topic21">21. Перевозка пассажиров</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic22" value="22" />
                                        <label className="custom-control-label" for="topic22">22. Перевозка груза</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic23" value="23" />
                                        <label className="custom-control-label" for="topic23">23. Буксировка и эксплуатация транспортных составов</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic24" value="24" />
                                        <label className="custom-control-label" for="topic24">24. Учебная езда</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="topic25" value="25" />
                                        <label className="custom-control-label" for="topic25">25. Движение транспортных средств в колоннах</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" style={{marginTop: '20px'}}>
                            <button className="btn btn2" id="exam-bytopic-start">НАЧАТЬ</button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="exam__content-box">
                {body}
            </div>
        );
    }
}

export default TabContent