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
import Insta from './Insta';
import Mail from './Mail';
import UserDetails from './UserDetails';
function App() {
  
  return (
    <>
      <Router>
           <Header></Header>
        <Routes>

          {/* Home */}
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path=':userId' element={<UserDetails></UserDetails>}></Route>
        
          {/* About */}
          <Route path="/about" element={<About />}></Route>

          {/* Contact */}
          <Route path="/contact" element={ <Conatct />} >
            <Route index element={<Insta></Insta>}></Route>
            <Route path='insta' element={<Insta></Insta>}></Route>
            <Route path='mail' element={<Mail></Mail>}></Route>
          </Route>

          <Route path="*" element={ <Error />} />

        </Routes>
      </Router>
    </> 
  );
}

export default App;
