import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from "./reducers"
import { createHashHistory } from "history"

export const history = createHashHistory()

const store = createStore(
	createRootReducer(history),
	{},
	compose(
		applyMiddleware(
			routerMiddleware(history) // for dispatching history actions
			// ... other middlewares ...
		)
	)
)

export default store
