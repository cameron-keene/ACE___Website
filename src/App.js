import React from 'react';
import './App.css';
import Header from './Header'
import BackgroundImage from './features/BackgroundImage'
import Navbar from './features/Navbar'
import NavigationBar from './NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './features/Footer'

function App() {
  return (
    <div className="app">
		<NavigationBar />
    <BackgroundImage/>
    <Footer/>
    </div>
  );
}

export default App;
