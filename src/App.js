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
import Footer from './features/Footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
  	<Router>
  		<div className="app">
		<NavigationBar />
			<div className = "content"> 
				<Switch>
					<Route exact path = "/ACE_Website/">
						<HomePage />
					</Route>
					<Route path = "/ACE_Website/About">
						<AboutPage />
					</Route>
					<Route path = "/ACE_Website/Projects">
						<ProjectsPage />
					</Route>
					<Route path = "/ACE_Website/Tutorials">
						<TutorialsPage />
					</Route>
					<Route path = "/ACE_Website/Sponsors">
						<SponsersPage />
					</Route>
					<Route path = "/ACE_Website/Join">
						<JoinPage />
					</Route>
				</Switch>
			</div>
		<Footer/>
	    </div>
  	</Router>
    
  );
}

export default App;
