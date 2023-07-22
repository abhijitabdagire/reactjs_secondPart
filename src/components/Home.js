import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {
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
  document.title = `(${state}) Employees Online`;



  return (
    <div>
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
    </div>
  )
}

export default Home
