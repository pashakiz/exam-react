import React, {Component} from 'react';
import questions from '../questions';
import classNames from 'classnames';

class App extends Component {

    //tabExam, tabNumbers, tabTopics
    state = {
        tabOpen: 'tabNumbers'
    };

    render() {
    console.log('---', 'DB: ', questions[1]);
    const TabExamClasses = classNames(
        'btn btn_tab exam__tab exam__tab_exam',
        { active: (this.state.tabOpen === 'tabExam') }
    );
    const TabNumbersClasses = classNames(
        'btn btn_tab exam__tab exam__tab_numbers',
        { active: (this.state.tabOpen === 'tabNumbers') }
    );
    const TabTopicsClasses = classNames(
        'btn btn_tab exam__tab exam__tab_topics',
        { active: (this.state.tabOpen === 'tabTopics') }
    );

    let body = '';
    if (this.state.tabOpen === 'tabExam') {
        body = <div class="exam__content exam__content_exam active">tab Exam</div>;
    }
    if (this.state.tabOpen === 'tabNumbers') {
        body = <div class="exam__content exam__content_numbers active">tab Numbers</div>;
    }
    if (this.state.tabOpen === 'tabTopics') {
        body = <div class="exam__content exam__content_topics active">tab Topics</div>;
    }

    return (
        <div className="exam">
            <div className="exam__tabs">
                <div className={TabExamClasses} onClick={this.handleTabExam}>Экзамен</div>
                <div className={TabNumbersClasses} onClick={this.handleTabNumbers}>Билеты по номерам</div>
                <div className={TabTopicsClasses} onClick={this.handleTabTopics}>Билеты по темам</div>
            </div>
            <div className="exam__content-box">
                {body}
            </div>
        </div>
    );
    }

    handleTabExam = () => this.setState({
        tabOpen: 'tabExam'
    });
    handleTabNumbers = () => this.setState({
        tabOpen: 'tabNumbers'
    });
    handleTabTopics = () => this.setState({
        tabOpen: 'tabTopics'
    });
}

export default App;
