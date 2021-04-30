import NavbarComponent from './Components/NavbarComponent';
import './App.css';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import ReactGa from 'react-ga';

function App() {
  
  useEffect(() => {
    ReactGa.initialize('G-121EBY7E67');
    ReactGa.pageview('/home')
  }, [])

  return (
    <div className="App">
      <NavbarComponent />
      <HomePage />   
      <Footer />   
    </div>
  );
}

export default App;
