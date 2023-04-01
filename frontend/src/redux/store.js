import { configureStore } from "@reduxjs/toolkit";
import * as game from "./reducers/game";
import * as ui from "./reducers/ui";

const store = configureStore({
    reducer: {
        game: game.reducer,
        ui: ui.reducer,
    },
});

export const selectors = {
    game: game.selectors,
    ui: ui.selectors,
};

export const actions = {
    game: game.actions,
    ui: ui.actions,
};

export default store;