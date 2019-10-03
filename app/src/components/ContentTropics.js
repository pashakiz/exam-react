import React from 'react';
import Question from './Question';
import Result from './Result';
import topicNames from '../topicNames';
import topics from '../topics';

export default class ContentTopics extends React.Component {
    state = {
        examMode: 'topic',
        isQuestion: false,
        isResult: false,
        ticketNum: 0,
        chosenTopicNums: [],
        isHelp: true,
        checkedQuestions: [],
        checkedTicked: null,
        timerData: null,
        timeOut: false,
        isSaveToLocalStorage: false,
        localStorage: window.localStorage,
        startBtnDisabled: true
    };

    handleRestart = () => {
        this.setState({
            isQuestion: false,
            isResult: false,
            ticketNum: 0,
            chosenTopicNums: [],
            checkedQuestions: [],
            checkedTicked: null,
            isSaveToLocalStorage: false,
            localStorage: window.localStorage,
            startBtnDisabled: true
        });
    };

    getQuestionData = (checkedTicked, checkedQuestions, timerData, timeOut) => {
        this.setState({
            isResult: true,
            checkedQuestions: checkedQuestions,
            checkedTicked: checkedTicked,
            timerData: timerData,
            timeOut: timeOut
        });
    };

    render() {

        const {tabOpen} = this.props;
        let body = '';

        if (this.state.isQuestion && this.state.chosenTopicNums.length) {

            let allQuestions = [];
            for (let i = 0; i < this.state.chosenTopicNums.length; i++) {
                allQuestions = allQuestions.concat(topics['t'+this.state.chosenTopicNums[i]]);
            }
            let checkedQuestions = [];
            for (let i = 0; i < allQuestions.length; i++) {
                checkedQuestions.push(null);
            }
            body = <Question examMode={this.state.examMode}
                             chosenTopicNums={this.state.chosenTopicNums}
                             ticketNum={this.state.ticketNum}
                             allQuestions={allQuestions}
                             checkedQuestions={checkedQuestions}
                             getQuestionData={this.getQuestionData}
                             isHelp={this.state.isHelp}/>;
        }

        if (this.state.isResult && this.state.checkedQuestions.length) {
            body = <Result examMode={this.state.examMode}
                           checkedQuestions={this.state.checkedQuestions}
                           checkedTicked={this.state.checkedTicked}
                           handleRestart={this.handleRestart.bind(this)}
                           timerData={this.state.timerData}
                           timeOut={this.state.timeOut}
                           isSaveToLocalStorage={this.state.isSaveToLocalStorage}/>;
        }

        if (tabOpen === 'tabTopics' && !this.state.isQuestion && !this.state.isResult) {
            let topicList1 = [];
            let topicList2 = [];
            let topicList1Length = Math.ceil(topicNames.length / 2);

            for (let i = 0; i <= topicList1Length-1; i++ ) {
                let i1 = i+1;
                let id = 'topic'+i1;
                topicList1.push(
                    <div className="custom-control custom-checkbox" key={i1}>
                        <input type="checkbox" className="custom-control-input custom-control-input_topicitem"
                               onChange={this.handleClickChooseTopic}
                               id={id} name={id} value={i1} />
                        <label className="custom-control-label" htmlFor={id}>{i1}. {topicNames[i]}</label>
                    </div>
                );
            }

            for (let i = topicList1Length; i <= topicNames.length-1; i++ ) {
                let i1 = i+1;
                let id = 'topic'+i1;
                topicList2.push(
                    <div className="custom-control custom-checkbox" key={i1}>
                        <input type="checkbox" className="custom-control-input custom-control-input_topicitem"
                               onChange={this.handleClickChooseTopic}
                               id={id} name={id} value={i1} />
                        <label className="custom-control-label" htmlFor={id}>{i1}. {topicNames[i]}</label>
                    </div>
                );
            }

            let bodyTitle = (
                <div className="col-topic-title text-center">
                    <div className="h3">Работа над ошибками по темам</div>
                    <p>Выберите нужную вам тему (или несколько) и нажмите кнопку &laquo;Начать&raquo;</p>
                </div>
            );

            body = (
                <div className="exam__bytopics">
                    {bodyTitle}
                    <div className="d-sm-flex justify-content-center align-items-start">
                        <div className="col-topics">
                            {topicList1}
                        </div>
                        <div className="col-topics">
                            {topicList2}
                        </div>
                    </div>
                    <div className="text-center" style={{marginTop: '20px'}}>
                        <button className="btn btn2 btn_start"
                                disabled={this.state.startBtnDisabled}
                                onClick={this.handleClickStart}>НАЧАТЬ</button>
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

    handleClickChooseTopic = () => {
        let chosenTopics = document.getElementsByClassName('custom-control-input_topicitem');
        let chosenTopicNums = [];

        for (let i = 0; i < chosenTopics.length; i++) {
            if (chosenTopics[i].checked) {
                chosenTopicNums.push(chosenTopics[i].value);
            }
        }

        if (chosenTopicNums.length) {
            this.setState({
                startBtnDisabled: false,
                chosenTopicNums: chosenTopicNums
            });
        } else {
            this.setState({
                startBtnDisabled: true,
                chosenTopicNums: []
            });
        }
    };

    handleClickStart = () => {
        this.setState({
            isQuestion: true
        });
    }
}