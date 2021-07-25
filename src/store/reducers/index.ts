import { combineReducers } from "redux"
import testReducer from "./test.reducer"
import { connectRouter } from "connected-react-router"
import { History } from "history"

const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		test: testReducer,
	})

export default createRootReducer
