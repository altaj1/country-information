import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

     const CountryDetails = () => {
     const {countryName} = useParams();
     console.log(countryName)
     const [country, setCountry] = useState({});
    useEffect(()=>{
         const url = `https://restcountries.com/v3.1/name/${countryName}`;
         fetch(url)
         .then(res => res.json())
         .then(data=> {
            console.log(data)
            setCountry(data)
         })
     },[])
    return (
        <div>
              
              <h1>Country Name: {countryName}</h1>
              
             

            
        </div>
    );
};

export default CountryDetails;