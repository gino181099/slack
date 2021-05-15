import React from "react"
import "./App.css"
import { useStateValue } from "./StateProvider"
import Login from "./Components/Login"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Chat from "./Components/Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
	const [{ user }, dispatch] = useStateValue()

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<div className="app__main">
										<h1>Welcome</h1>
									</div>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	)
}

export default App
