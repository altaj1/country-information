import React from 'react';
import countryAbout from './countryAbout.css'
import { Link } from 'react-router-dom';

const CountryAbout = (props) => {
    // console.log("About: ",props)
    return (
        <div className='name'>
            
            <h3>Country name: {props.country.name.common}</h3>
            <p>capital: {props.country.capital}</p>
            <p>Flag:<img src={props.country.flags.png } alt=''/></p>
        <p>Name: <Link to ={`/detail/${props.country.name.common}`}> Show Country Details, {props.country.name.common}</Link></p>
            
        </div>
    );
};

export default CountryAbout;