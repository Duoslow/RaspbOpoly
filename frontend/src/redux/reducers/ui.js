const types = {
    SET_UI_STATE: 'start_ui/setUIState',
};

const initialState = {
    startUI: 'mainUI',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_UI_STATE:
            return {
                ...state,
                startUI: action.payload,
            };
        default:
            return state;
    }
}

export const actions = {
    setUIState: (payload) => ({
        type: types.SET_UI_STATE,
        payload,
    }),
};






