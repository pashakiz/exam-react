import React from 'react';
import ContentExam from './ContentExam';
import ContentNumbers from './ContentNumbers';
import ContentTopics from './ContentTropics';
import {bindActionCreators} from "redux";
import {selectTab} from "../actions/select-tab";
import {connect} from "react-redux";

class TabContent extends React.Component {
    render() {

        let body = '';
        if (this.props.tabActive.name === 'tabExam') {
            body = (
                <ContentExam />
            );
        }
        if (this.props.tabActive.name === 'tabNumbers') {
            body = (
                <ContentNumbers />
            );
        }
        if (this.props.tabActive.name === 'tabTopics') {
            body = (
                <ContentTopics />
            );
        }

        return (
            <div className="exam__content-box">
                {body}
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

export default connect(mapStateToProps, matchDispatchToProps)(TabContent);