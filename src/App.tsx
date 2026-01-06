import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {

  const [menu, setMenu] = useState("Home");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme])

  const testOpenMenu = () => {
    switch(menu) {
      case "Home": return (<Home setMenu={setMenu} language={language} />);
      case "About": return (<About language={language} />);
      case "Projects": return (<Projects language={language} />);
      case "Contact": return (<Contact language={language} />);
    }
  };

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} setMenu={setMenu} setLanguage={setLanguage} language={language} />
      {testOpenMenu()}
    </div>
  )
}

export default App
