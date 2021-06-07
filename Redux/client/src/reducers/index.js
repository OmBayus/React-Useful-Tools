import {combineReducers} from "redux"

//reducers
import counterReducer from "./counter"
import loggedReducer from "./isLogged"
import bookReducer from "./books"

const allReducers = combineReducers({
      counterReducer,
      loggedReducer,
      bookReducer
})

export default allReducers