import axios from "axios";

const types = {
    GET_GAME: "GET_GAME",
    NEW_GAME: "NEW_GAME",
    GET_PLAYERS: "GET_PLAYERS",

};

const initialState = {
    game: {},
    players: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_GAME:
            return {
                ...state,
                game: action.payload,
            };
        case types.NEW_GAME:
            return {
                ...state,
                game: action.payload,
            };
        case types.GET_PLAYERS:
            return {
                ...state,
                players: action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    getGame: (id) => async (dispatch) => {
        const res = await axios.get(`/api/game/${id}`);
        dispatch({
            type: types.GET_GAME,
            payload: res.data,
        });
    },
    newGame: (game) => async (dispatch) => {
        const res = await axios.post("/api/game/new", game);
        dispatch({
            type: types.NEW_GAME,
            payload: res.data,
        });
    },
    getPlayers: (id) => async (dispatch) => {
        const res = await axios.get(`/api/game/${id}/players`);
        dispatch({
            type: types.GET_PLAYERS,
            payload: res.data,
        });
    },
};
