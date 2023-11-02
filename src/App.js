import './App.css';
import './index.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Bottom from './Components/Bottom';
import About from './Pages/About';
import Projects from './Pages/Projects';


function App() {
  return (
    <>
      <Nav />
      <Body />
      <Bottom />
      <About />
      <Projects />

    </>
  );
}

export default App;
