import './App.css';
import Header from './features/Header'
import BackgroundImage from './features/BackgroundImage'
import Navbar from './features/Navbar'
import NavigationBar from './features/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
		<NavigationBar />
    <BackgroundImage/>
    </div>
  );
}

export default App;
