import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";


import rootReducer from "./root-reducer";

const middlerware = [];

if (process.env.NODE_ENV === "devlopment") {
    middlerware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlerware));

export default store;