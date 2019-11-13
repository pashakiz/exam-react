import {combineReducers} from 'redux';
import questions from './questions';
import tickets from './tickets';
import topicNames from './topicNames';
import topics from './topics';
import myConst from './const';
import tabActive from './tab-active';

const allRedusers = combineReducers({
    questions: questions,
    tickets: tickets,
    topicNames: topicNames,
    topics: topics,
    myConst: myConst,
    tabActive: tabActive
});

export default allRedusers;