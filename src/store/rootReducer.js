// tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import { useReducer } from "react";

const rootReducer=combineReducers({
    cart:cartReducer


})
export default rootReducer;