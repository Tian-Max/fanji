import {combineReducers} from "redux"
import * as furniture from "./furniture"


const reducer = combineReducers({
    ...furniture
});

export default reducer