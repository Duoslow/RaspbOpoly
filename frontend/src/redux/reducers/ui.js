const types = {
    GAME_START_UI: "GAME_START_UI",
    GAME_WAIT_FOR_PLAYERS_UI: "GAME_WAIT_FOR_PLAYERS_UI",
};

const initialState = {
    game: null,
    ui: {
        game: {
            status: "start",
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GAME_START_UI:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    game: {
                        status: "start",
                    },
                },
            };
        case types.GAME_WAIT_FOR_PLAYERS_UI:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    game: {
                        status: "waitForPlayers",
                    },
                },
            };
        default:
            return state;
    }
};

const selectors = {
    ui: {
        game: {
            status: (state) => state.ui.game.status,
        },
    },
};

const actions = {
    ui: {
        game: {
            start: () => ({
                type: types.GAME_START_UI,
            }),
            waitForPlayers: () => ({
                type: types.GAME_WAIT_FOR_PLAYERS_UI,
            }),
        },
    },
};

export { reducer, selectors, actions };
