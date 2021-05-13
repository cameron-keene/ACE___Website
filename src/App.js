import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './features/NavigationBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TutorialsPage from './pages/TutorialsPage';
import SponsersPage from './pages/SponsorsPage';
import JoinPage from './pages/JoinPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
  	<Router>
  		<div className="app">
		<NavigationBar />
			<div className = "content"> 
				<Switch>
					<Route exact path = "/">
						<HomePage />
					</Route>
					<Route path = "/About">
						<AboutPage />
					</Route>
					<Route path = "/Projects">
						<ProjectsPage />
					</Route>
					<Route path = "/Tutorials">
						<TutorialsPage />
					</Route>
					<Route path = "/Sponsors">
						<SponsersPage />
					</Route>
					<Route path = "/Join">
						<JoinPage />
					</Route>
				</Switch>
			</div>
	    </div>
  	</Router>
    
  );
}

export default App;
