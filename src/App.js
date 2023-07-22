import './App.css';
import { useState , useEffect } from 'react';
function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([])

  useEffect(()=>{
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const response = await get.json();
      setData(response)
      console.log(response);

    }
    getData();
  },[state])
  document.title = `(${state}) Employees Online`
  console.log("Fuction Body");
  return (
    <>
      <h2>Hey!</h2>
      <button onClick={()=> setState(state+5)}>Click Me {state}</button>
      {
        data.map((element, index)=>{
          return(
              <div className='data' key={index}>
                <h4>{element.firstName}</h4>
                <h4>{element.lastName}</h4>
                <h4>{element.email}</h4>
              </div>
            )
        })
      }
     
      <div>
        {console.log("Inside JSX")}
      </div>
    </> 
  );
}

export default App;
