import React, { useEffect, useState } from 'react';
import CountryAbout from '../countryAbout/CountryAbout';

const Home = () => {
    const [country, setCountry] = useState([]);
useEffect (()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data =>{
        //console.log(data.slice(0,10))
        setCountry(data.slice(0,10))
    })

}, [])

    return (
        <div>
           <div className="">
                 <h1>Home page</h1>
            </div> 
            <div className="">
                {
                 country.map(country=> <CountryAbout country={country} ></CountryAbout> )
                }
            </div>
        </div>
    );
};

export default Home;