import React from 'react';
import ContentExam from './ContentExam';
import ContentNumbers from './ContentNumbers';
import ContentTopics from './ContentTropics';
import {bindActionCreators} from "redux";
import {selectTab} from "../actions";
import {connect} from "react-redux";

class TabContent extends React.Component {
    render() {

        let body = '';
        if (!this.props.tabActive) {
            body = (
                <p>ContentExam</p>//<ContentExam tabOpen={tabOpen} />
            );
        } else {
            if (this.props.tabActive === 'tabExam') {
                body = (
                    <p>ContentExam</p>//<ContentExam tabOpen={tabOpen} />
                );
            }
            if (this.props.tabActive === 'tabNumbers') {
                body = (
                    <p>ContentNumbers</p>//<ContentNumbers tabOpen={tabOpen} />
                );
            }
            if (this.props.tabActive === 'tabTopics') {
                body = (
                    <p>ContentTopics</p>//<ContentTopics tabOpen={tabOpen} />
                );
            }
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

//export default TabContent