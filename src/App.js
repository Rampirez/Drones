import React from 'react';
import Landing from './components/landing/Landing';
import Menu from './components/menu/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk  } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



import './App.css';
library.add(faMailBulk , faYoutube, faInstagram, faFacebook);

function App() {
  return (
    <div className="App">
      <Landing />
      <Menu />
    </div>
  );
}

export default App;
