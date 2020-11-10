import React, { useEffect, useState } from 'react';


function App() {
    const [countries, setCountries] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    console.log(randomCountry);
    const [randomOptions, setRandomOptions] = useState([]);
    console.log(randomOptions);
    const [userIsWin, setUserIsWin] = useState('');

    async function fetchCountries() {
        const URL_IPA = "https://restcountries.eu/rest/v2/all";
        const response = await fetch(URL_IPA);
        const countries = await response.json();
        setCountries(countries);
        getRandomCountry(countries);
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    function getRandomCountry(countries) {
        const random = countries[Math.floor(Math.random() * countries.length)];
        console.log(random.name);
        const randomOpt1 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt2 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt3 = countries[Math.floor(Math.random() * countries.length)];
        const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
        randomOptions.sort(() => { return 0.5 - Math.random() });
        setRandomCountry(random);
        setRandomOptions(randomOptions);
    }

    return (
        <div>
            <h1>Country Quiz</h1>
            <div>
                <img src={randomCountry.flag} />
                <p>Which country does this flag belong to?</p>
            </div>
            <form>
                <button value={randomOptions[0]}>{randomOptions[0]}</button>
                <button value={randomOptions[1]}>{randomOptions[1]}</button>
                <button value={randomOptions[2]}>{randomOptions[2]}</button>
                <button value={randomOptions[3]}>{randomOptions[3]}</button>
            </form>
        </div>
    )
}

export default App;

