export default function (state={name: 'tabExam', examMode: 'ticket'}, action) {
    switch (action.type) {
        case 'TAB_SELECTED':
            return action.payload;
        default:
            return state;
    }
}