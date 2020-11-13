import { useEffect, useState } from 'react';
import Questions from './pages/Questions';

function useCountry() {

    const [countries, setCountries] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [classList, setClassList] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [bgColor, setBgColor] = useState({ backgroundColor: 'white' });

    async function fetchCountries() {
        const URL_IPA = "https://restcountries.eu/rest/v2/all";
        const response = await fetch(URL_IPA);
        const countries = await response.json();
        getRandomeCountry(countries);
    }

    function getRandomeCountry(countries) {
        
        const random = countries[Math.floor(Math.random() * countries.length)];
        console.log(random.name);

        const randomOpt1 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt2 = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt3 = countries[Math.floor(Math.random() * countries.length)];
        const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
        const sortedOptions = randomOptions.sort(() => { return 0.5 - Math.random() });
        console.log(sortedOptions);

        const randomQuestion = Questions[Math.floor(Math.random() * Questions.length)];
        console.log(randomQuestion);

        // const allQuestions = [ randomQuestion.question1 ? `${random.capital} ${randomQuestion.question1}` : `${randomQuestion.question2}`]
        // console.log(allQuestions);

        const countryQuiz = {
            question: randomQuestion,
            country: random,
            flag: random.flag,
            capital: random.capital,
            answers: sortedOptions,
            correctAnswer: random.name,
            userAnswer: '',
        }

        setCountries([countryQuiz]);
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        const userGuess = e.target.value;
        const findAnswer = countries.find(quiz => quiz.correctAnswer);
        if (userGuess == findAnswer.correctAnswer) {
            setIsCorrect(true);
            // setClassList('correct');
            setScore(score + 1);
        } else if (userGuess !== findAnswer.correctAnswer) {
            // setClassList('incorrect');
            setIsCorrect(false);
            setShowScore(true)
        } 
        setIsShow(!isShow);
    }

    function handleShowBtn() {
        fetchCountries();
        setIsShow(false);
    }

    function tryTheGameAgain() {
        fetchCountries();
        setScore(0);
        setShowScore(false);
    }

    return { handleClick, countries,  handleShowBtn, isShow, score, isCorrect, classList, tryTheGameAgain, showScore };
}

export default useCountry;