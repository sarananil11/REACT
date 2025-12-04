import {createstore} from "redux";
import todoReducer from "./reducers";
const store=createstore(todoReducer);
export default store