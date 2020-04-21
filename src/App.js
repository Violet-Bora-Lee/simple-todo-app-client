import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";
import TodoState from './context/todo/TodoState';
import './App.css';
import AlertState from "./context/alert/alertState";

const App = () => {
	return (
		<TodoState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar/>
						<div className="container">
							<Alerts/>
							<Switch>
								<Route exact path='/' component={Home}/>
								<Route exact path='/about' component={About}/>
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
		</TodoState>
);
}

export default App;
