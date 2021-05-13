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
					<Route exact path = "/Please_work/">
						<HomePage />
					</Route>
					<Route path = "/Please_work/About">
						<AboutPage />
					</Route>
					<Route path = "/Please_work/Projects">
						<ProjectsPage />
					</Route>
					<Route path = "/Please_work/Tutorials">
						<TutorialsPage />
					</Route>
					<Route path = "/Please_work/Sponsors">
						<SponsersPage />
					</Route>
					<Route path = "/Please_work/Join">
						<JoinPage />
					</Route>
				</Switch>
			</div>
	    </div>
  	</Router>
    
  );
}

export default App;
