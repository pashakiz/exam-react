import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {selectTab} from '../actions/select-tab';
import TabContent from './TabContent';

class App extends React.Component {

    render() {
        const TabExamClasses = classNames(
            'btn btn_tab exam__tab exam__tab_exam',
            { active: (this.props.tabActive.name === 'tabExam') }
        );
        const TabNumbersClasses = classNames(
            'btn btn_tab exam__tab exam__tab_numbers',
            { active: (this.props.tabActive.name === 'tabNumbers') }
        );
        const TabTopicsClasses = classNames(
            'btn btn_tab exam__tab exam__tab_topics',
            { active: (this.props.tabActive.name === 'tabTopics') }
        );

        return (
            <div className="exam">
                <div className="exam__tabs">
                    <div className={TabExamClasses} onClick={() => this.props.selectTab('tabExam', 'ticket')}>Экзамен</div>
                    <div className={TabNumbersClasses} onClick={() => this.props.selectTab('tabNumbers', 'ticket')}>Билеты по номерам</div>
                    <div className={TabTopicsClasses} onClick={() => this.props.selectTab('tabTopics', 'topic')}>Билеты по темам</div>
                </div>
                <TabContent />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tabActive: state.tabActive
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectTab: selectTab}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
