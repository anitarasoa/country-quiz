import React, { useEffect, useState } from 'react';

const API = "https://restcountries.eu/rest/v2/all";
const FLAG_API = "https://restcountries.eu/data/hnd.svg";
const CAPITAl = "https://restcountries.eu/rest/v2/capital/{capital}";

function App() {
    //fetch the data from the API;
    const [country, setCountry] = useState('');

    async function fetchData() {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <h1>Country Quiz App</h1>
    )
}

export default App;