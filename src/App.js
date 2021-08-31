import React from 'react';
import NavbarComponent from './Components/NavbarComponent';
import Footer from './Components/Footer';
import ReactGa from 'react-ga';
import firebase from './firebase';
import Home from './Components/Home'


function App() {

  React.useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("token: ", data);
    })
    ReactGa.initialize('G-121EBY7E67');
    ReactGa.pageview('/home')
  }, [])

  return (
    <div className="App">
      <NavbarComponent />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
