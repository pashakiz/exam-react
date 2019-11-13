export const selectTab = (tab, mode) => {
    return {
        type: 'TAB_SELECTED',
        payload: {name: tab, examMode: mode}
    }
};