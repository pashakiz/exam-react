import React from 'react';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedQuestions: this.props.checkedQuestions,
            checkedTicked: this.props.checkedTicked
        };
    }

    render() {
        this.allQuestionsCount = this.state.checkedQuestions.length;
        this.correctQuestionsCount = 0;
        for (let i = 0; i < this.allQuestionsCount; i++) {
            if (this.state.checkedQuestions[i] === true) {
                this.correctQuestionsCount++;
            }
        }
        let title1 = '';
        let title2 = '';

        if(this.allQuestionsCount === 20) {
            if (this.correctQuestionsCount === 20) {
                title1 = 'Отлично';
                title2 = 'Тест сдан!';
            }
            if (this.correctQuestionsCount === 19) {
                title1 = 'Хорошо';
                title2 = 'Тест сдан!';
            }
            if (this.correctQuestionsCount === 18) {
                title1 = 'Хорошо';
                title2 = 'Тест сдан!';
            }
            if (this.correctQuestionsCount < 18) {
                title1 = '';
                title2 = 'Тест не сдан!';
            }
            if (this.props.timeOut) {
                title1 = '';
                title2 = 'Тест не сдан!';
            }
        }

        let timeRow = <div className="exam-result__label1">{this.props.timerData}</div>;
        if (this.props.timeOut) {
            timeRow = <div className="exam-result__label1 exam-result__label1_overrun">{this.props.timerData}</div>;
        }

        return (
            <div className="exam-result">
                <div className="exam-result__title">Результат</div>
                <div className="exam-result__score">{this.correctQuestionsCount}/{this.allQuestionsCount}</div>
                {timeRow}
                <div className="exam-result__label1">{title1}</div>
                <div className="exam-result__label2">{title2}</div>
                <button className="btn btn2" onClick={this.props.handleRestart}>НАЗАД</button>
            </div>
        );
    }

    handleBack = () => this.setState({
        tabOpen: 'tabExam'
    });

    sendTimerData = () =>  {
        this.props.handleRestart();
        console.log('Timer.sendTimerData:', this.state.min+':'+this.state.sec);
    };

    componentWillUnmount() {
        if(this.allQuestionsCount === 20 && this.correctQuestionsCount >= 18){
            localStorage.setItem('ticket'+this.state.checkedTicked, true);
        } else {
            localStorage.setItem('ticket'+this.state.checkedTicked, false);
        }
    }
}