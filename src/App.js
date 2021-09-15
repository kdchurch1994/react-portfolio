import React, { useState } from 'react';
import Header from './components/Header';
//import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [currentLink, setCurrentLink] = useState("about");

  const switchLink = () => {
    switch (currentLink) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div>
        <Header currentLink={currentLink} setCurrentLink={setCurrentLink}></Header>
      </div>
      <div>
        <main>{switchLink()}</main>
      </div>
    </div>
  );
}

export default App;
