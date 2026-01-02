import { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';



function App() {

  const [menu, setMenu] = useState("Home");

  const testOpenMenu = () => {
    switch(menu) {
      case "Home": return (<Home />);
      case "About": return (<About />);
      case "Projects": return (<Projects />);
      case "Contact": return (<Contact />);
    }
  };

  return (
    <div>
      <Header setMenu={setMenu} />
      {testOpenMenu()}
      {/* <Projects /> */}
    </div>
  )
}

export default App
