import React, {Component} from 'react';

export default class ContentTopicsStart extends Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabTopics') {
            body = (
                <div className="exam__bytopics">
                    <div className="col-topic-title text-center">
                        <div className="h3">Работа над ошибками по темам</div>
                        <p>Выберите нужную вам тему (или несколько) и нажмите кнопку &laquo;Начать&raquo;</p>
                    </div>
                    <div className="d-sm-flex justify-content-center align-items-start">
                        <div className="col-topics">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic01" value="1" />
                                <label className="custom-control-label" htmlFor="topic01">1. Общие положения</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic02" value="2" />
                                <label className="custom-control-label" htmlFor="topic02">2. Обязанности и права водителей механических транспортных средств</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic03" value="3" />
                                <label className="custom-control-label" htmlFor="topic03">3. Движение транспортных средств со специальными сигналами</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic04" value="4" />
                                <label className="custom-control-label" htmlFor="topic04">4. Обязанности и права пешеходов</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic05" value="4" />
                                <label className="custom-control-label" htmlFor="topic05">5. Обязанности и права пассажиров</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic06" value="6" />
                                <label className="custom-control-label" htmlFor="topic06">6. Требования к велосипедистам</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic07" value="7" />
                                <label className="custom-control-label" htmlFor="topic07">7. Требования к лицам, управляющим гужевым транспортом и погонщикам животных</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic08" value="8" />
                                <label className="custom-control-label" htmlFor="topic08">8. Регулирование дорожного движения</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic09" value="9" />
                                <label className="custom-control-label" htmlFor="topic09">9. Предупреждающие сигналы</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic10" value="10" />
                                <label className="custom-control-label" htmlFor="topic10">10. Начало движения и изменение его направления</label>
                            </div>
                        </div>
                        <div className="col-topics">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic21" value="21" />
                                <label className="custom-control-label" htmlFor="topic21">21. Перевозка пассажиров</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic22" value="22" />
                                <label className="custom-control-label" htmlFor="topic22">22. Перевозка груза</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic23" value="23" />
                                <label className="custom-control-label" htmlFor="topic23">23. Буксировка и эксплуатация транспортных составов</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic24" value="24" />
                                <label className="custom-control-label" htmlFor="topic24">24. Учебная езда</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="topic25" value="25" />
                                <label className="custom-control-label" htmlFor="topic25">25. Движение транспортных средств в колоннах</label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{marginTop: '20px'}}>
                        <button className="btn btn2" id="exam-bytopic-start">НАЧАТЬ</button>
                    </div>
                </div>
            );
        }

        return(
            <div className="exam__content exam__content_topics active">
                {body}
            </div>
        )
    }
}