import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

//ToDo: pass a Reducer Funtion here instead



const store = createStore(bookingReducer);

export default store;