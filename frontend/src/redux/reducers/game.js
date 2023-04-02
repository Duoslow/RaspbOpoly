const types = {
    GAME_STARTED: 'game/started',
};

const initialState = {
    started: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GAME_STARTED:
            return {
                ...state,
                started: true,
            };
        default:
            return state;
    }
};

export const actions = {
    gameStarted: () => ({
        type: types.GAME_STARTED,
    }),
};
