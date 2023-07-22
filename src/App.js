import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './About';
import Conatct from './Conatct';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  return (
    <>
      <Router>
           <Header></Header>
        <Routes>
          {/* Home */}
          <Route path="/" element={ <Home />}>
           
          </Route>
          {/* About */}
          <Route path="/about" element={<About />}>
            
          </Route>
          {/* Contact */}
          <Route path="/contact" element={ <Conatct />} >
          </Route>
          <Route path="*" element={ <Error />} />
        </Routes>
      </Router>
    </> 
  );
}

export default App;
