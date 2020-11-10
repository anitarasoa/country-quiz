import React, { useEffect, useState } from 'react';


function App() {
    const [countries, setCountries] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    const [randomOptions, setRandomOptions] = useState([]);
    const [userIsWin, setUserIsWin] = useState('');
    const [disableFieldset, setDisableFieldset] = useState(false);
    const [goodGuess, setGoodGuess] = useState(0);
    console.log(goodGuess);
    const [bgColor, setBgColor] = useState({ backgroundColor: 'white' });

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

    function checkWin(e) {
        // setDisableFieldset(true);
        e.preventDefault();
        const winCountry = randomCountry.name;
        const userGuess = e.target.value
        if (winCountry === userGuess) {
            setUserIsWin('Win');
            setGoodGuess(goodGuess + 1);
            setBgColor({ backgroundColor: '#81C784' })
        } else {
            setUserIsWin('Lose');
            setBgColor({ backgroundColor: '#FF8A65' })
        }
        setTimeout(() => {
            setUserIsWin('');
            setDisableFieldset(false);
            setBgColor({ backgroundColor: 'white' });
            console.log(e.target)
        }, 2000)

    }

    return (
        <div>
            <h1>Country Quiz</h1>
            <div>
                <img src={randomCountry.flag} />
                <p>Which country does this flag belong to?</p>
                <h2>{userIsWin === 'Win' ? 'You guess right! ' : ''}
                    {userIsWin === 'Lose' ? 'You guess wrong. ' : ''}
                   Score:{goodGuess}
                </h2>
            </div>
            <form onClick={e => checkWin(e)}>
                <button value={randomOptions[0]}>{randomOptions[0]}</button>
                <button value={randomOptions[1]}>{randomOptions[1]}</button>
                <button value={randomOptions[2]}>{randomOptions[2]}</button>
                <button value={randomOptions[3]}>{randomOptions[3]}</button>
            </form>
            <button onClick={() => fetchCountries()}>Next</button>
        </div>
    )
}

export default App;