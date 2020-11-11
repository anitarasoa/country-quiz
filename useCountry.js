import {useEffect, useState} from 'react';

function useCountry() {
    
    const [countries, setCountries] = useState([]);
    const [randomCountry, setRandomCountry] = useState({});
    const [randomOptions, setRandomOptions] = useState([]);
    const [userIsWin, setUserIsWin] = useState(false);
    const [isShow, setIsShow] = useState(false);
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
            setUserIsWin(true);
            setCorrectAnswer(true);
            setGoodGuess(goodGuess + 1);
            setBgColor({ backgroundColor: '#81C784' })
        } else {
            setUserIsWin(false);
            setBgColor({ backgroundColor: '#FF8A65' })
        }
        setTimeout(() => {
            setUserIsWin(false);
            setBgColor({ backgroundColor: 'white' });
            console.log(e.target)
        }, 2000)

    }

    function handleShowBtn() {
            fetchCountries();
            setIsShow(false);
    }

    return { randomOptions, userIsWin, randomCountry, goodGuess, checkWin, fetchCountries, isShow, setIsShow, handleShowBtn }
}

export default useCountry;