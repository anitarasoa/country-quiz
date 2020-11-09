import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const API = "https://restcountries.eu/rest/v2/all";
const CAPITAl = "https://restcountries.eu/rest/v2/capital/{capital}";
const EESTI = "https://restcountries.eu/rest/v2/name/eesti";
// https://restcountries.eu/rest/v2/name/eesti
// https://restcountries.eu/rest/v2/name/united

function App() {
    //fetch the data from the API;
    const [country, setCountry] = useState([]);
    const [flags, setFlags] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    // const FLAG_API = `https://restcountries.eu/data/${flag}`;

    async function fetchData() {
        const res = await fetch(API);
        const data = await res.json();
        setCountry(data);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    

    return (
        <>
        <h1>Country Quiz App</h1>
        {country.map(count => (
            <div key={count.name}>
            <img src={count.flag} />
            <p>{count.capital}</p>
            </div>
        ))}
        </>
    )
}

export default App;