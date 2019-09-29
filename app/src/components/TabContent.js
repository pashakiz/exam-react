import React, {Component} from 'react';
import ContentExamStart from './ContentExam';
import ContentNumbersStart from './ContentNumbers';
import ContentTopicsStart from './ContentTropics';
//import classNames from 'classnames';


class TabContent extends Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabExam') {
            body = (
                <ContentExamStart tabOpen={tabOpen} />
            );
        }
        if (tabOpen === 'tabNumbers') {
            body = (
                <ContentNumbersStart tabOpen={tabOpen} />
            );
        }
        if (tabOpen === 'tabTopics') {
            body = (
                <ContentTopicsStart tabOpen={tabOpen} />
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