import React from 'react';
import ContentExam from './ContentExam';
import ContentNumbers from './ContentNumbers';
import ContentTopics from './ContentTropics';

class TabContent extends React.Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabExam') {
            body = (
                <ContentExam tabOpen={tabOpen} />
            );
        }
        if (tabOpen === 'tabNumbers') {
            body = (
                <ContentNumbers tabOpen={tabOpen} />
            );
        }
        if (tabOpen === 'tabTopics') {
            body = (
                <ContentTopics tabOpen={tabOpen} />
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