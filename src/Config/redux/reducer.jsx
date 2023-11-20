import { combineReducers } from "redux";
import { psikologReducer } from "./PsikologList/PsikologListSlice";

const reducer = combineReducers({
    psikolog: psikologReducer,
});

export default reducer;
