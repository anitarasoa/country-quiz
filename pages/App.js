import React, { useEffect, useState } from 'react';


function App() {
    const [countries, setCountries] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    const [randomOptions, setRandomOptions] = useState([]);
    const [userIsWin, setUserIsWin] = useState('');
    const [correctanswer, setCorrectAnswer] = useState(false);
    const [goodGuess, setGoodGuess] = useState(0);
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
        e.preventDefault();
        const winCountry = randomCountry.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setUserIsWin('Win');
            setCorrectAnswer(true);
            setGoodGuess(goodGuess + 1);
            setBgColor({ backgroundColor: '#81C784' })
        } else {
            setUserIsWin('Lose');
            setBgColor({ backgroundColor: '#FF8A65' })
        }
        setTimeout(() => {
            setUserIsWin('');
            setBgColor({ backgroundColor: 'white' });
            console.log(e.target)
        }, 2000)

    }

    return (
        <div className="container">

            <>
                <h1>Country Quiz</h1>
                <div>
                    <div>
                        {/* <img src={randomCountry.flag} />
                        <p>Which country does this flag belong to?</p> */}
                    </div>
                    <div>
                        <h2>{randomCountry.capital} is the capital of ?</h2>
                    </div>
                    <h2>{userIsWin === 'Win' ? 'You guess right! ' : ''}
                        {userIsWin === 'Lose' ? 'You guess wrong. ' : ''}
                        Score:{goodGuess}
                    </h2>
                </div>
                <form onClick={(e) => checkWin(e)}>
                    <button className="btn-random" value={randomOptions[0]}>A {randomOptions[0]}</button>
                    <button className="btn-random" value={randomOptions[1]}>B {randomOptions[1]}</button>
                    <button className="btn-random" value={randomOptions[2]}>C {randomOptions[2]}</button>
                    <button className="btn-random" value={randomOptions[3]}>D {randomOptions[3]}</button>
                </form>
                <button className="next" onClick={() => fetchCountries()}>Next</button>
            </>
        </div>
    )
}

export default App;