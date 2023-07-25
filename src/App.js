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
import { useRef, useState } from 'react';

// import {useState, createContext} from'react';
// import ComA from './components/ComA';

// const AppState = createContext();
// const NameContext = createContext();
function App() {
  // const [data, setData] = useState("Abhi")
  // const [name, setName] = useState({name: 'Soham ', age: '20'})
  // return (
  //   <>
  //     <AppState.Provider value={data}>
  //         <NameContext.Provider value={name}>
  //           <ComA ></ComA>    
  //         </NameContext.Provider>
  
  //     </AppState.Provider>
  
         <Header></Header>

  const [input, setInput] = useState("");
  // const counter = useRef(0);
  // const prevState = useRef("");

  const inputField = useRef();

  // useEffect(() => {
    //  counter.current = counter.current + 1;
    // prevState.current = input

  // },[input])

  const formHandler=(e)=>{
    setInput(e.target.value);
  }

  const clickHandler =()=>{
     inputField.current.value ="Abhijit";
      inputField.current.style.border = "2px solid red"
  }


return (
  <>

      <input ref={inputField} value={input} onChange={formHandler} />
      {/* <h2>Application has been rendered {counter.current} times</h2> */}
      {/* <h2>prevState was {prevState.current} </h2> */}
      <button onClick={clickHandler}>Submit</button>

      <Router>
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
// export {AppState, NameContext}
