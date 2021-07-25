import { createStore, applyMiddleware } from "redux"
import { routerMiddleware } from "connected-react-router"
import createRootReducer from "./reducers"
import { createHashHistory } from "history"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	createRootReducer(history),
	applyMiddleware(
		routerMiddleware(history), // for dispatching history actions
		sagaMiddleware
		// ... other middlewares ...
	)
)

sagaMiddleware.run(rootSaga)

export default store
