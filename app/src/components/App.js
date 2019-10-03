import React from 'react';
import classNames from 'classnames';
import {myConst} from '../const';
import TabContent from './TabContent';

class App extends React.Component {

    //tabExam, tabNumbers, tabTopics
    state = {
        tabOpen: myConst.ACTIVE_TAB_START
    };

    render() {
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

        return (
            <div className="exam">
                <div className="exam__tabs">
                    <div className={TabExamClasses} onClick={this.handleTabExam}>Экзамен</div>
                    <div className={TabNumbersClasses} onClick={this.handleTabNumbers}>Билеты по номерам</div>
                    <div className={TabTopicsClasses} onClick={this.handleTabTopics}>Билеты по темам</div>
                </div>
                <TabContent tabOpen={this.state.tabOpen}/>
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
