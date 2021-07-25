import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import Routes from "./components/core/Routes"
import store, { history } from "./store"

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
)
