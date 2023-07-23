import React, {useEffect, useState} from 'react'
import { useParams, useSearchParams} from 'react-router-dom';
const UserDetails = () => {
        const {userId} = useParams();
       
        const [data, setData] = useState({});
      
        const quary = useSearchParams();
        console.log(quary);
        // const [searchParams, setSearchParams] = useSearchParams();
        // console.log(searchParams.get('name'))

        useEffect(()=>{
          async function getData(){
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
            const response = await get.json();
            setData(response[0]);
           
          } 
          getData();
        },[])
  return (
    <>
    <div>
      <h2>{data.id}</h2>
      <img src={data.imageUrl} alt='image loading'/>
      <h2>{data.firstName}</h2>
      <h2>{data.lastName}</h2>
      <h2>{data.email}</h2>
      <h2>{data.contactNumber}</h2>
      <h2>{data.dob}</h2>
    </div>
    </>
 
  )
}

export default UserDetails
