import { useEffect, useState, useRef } from "react";
import Questions from "./pages/Questions";

function useCountry() {
  const [countries, setCountries] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const btnRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [letters, setLetters] = useState(['A', 'B', 'C', 'D']);
 
  async function fetchCountries() {
    const URL_IPA = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(URL_IPA);
    const countries = await response.json();
    getRandomeCountry(countries);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchCountries();
    }, 500);
  }, [])

  function getRandomeCountry(countries) {
    const random = countries[Math.floor(Math.random() * countries.length)];
    console.log(random.name);

    const randomOpt1 = countries[Math.floor(Math.random() * countries.length)];
    const randomOpt2 = countries[Math.floor(Math.random() * countries.length)];
    const randomOpt3 = countries[Math.floor(Math.random() * countries.length)];
    const randomOptions = [
      random.name,
      randomOpt1.name,
      randomOpt2.name,
      randomOpt3.name,
    ];
    const sortedOptions = randomOptions.sort(() => {
      return 0.5 - Math.random();
    });

    const randomQuestion =
      Questions[Math.floor(Math.random() * Questions.length)];

    const countryQuiz = {
      question: randomQuestion,
      country: random,
      flag: random.flag,
      capital: random.capital,
      answers: sortedOptions,
      correctAnswer: random.name,
      userAnswer: "",
    };

    setCountries(countryQuiz);
  }

  function handleClick(e) {
    e.preventDefault();
    const userGuess = e.target;
    if (userGuess.value === countries.correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
      btnRef.current.classList.add('correct');
    } else if (userGuess.value !== countries.correctAnswer) {
      setIsCorrect(false);
      setShowScore(false);
      btnRef.current.classList.add('correct');
      userGuess.classList.add('incorrect');
    }
    setIsShow(!isShow);
    setDisabled(true);
  }

  function handleShowBtn() {
    btnRef.current.classList.remove('correct');
    setDisabled(!disabled);
    fetchCountries();
    setIsShow(false);
    setShowScore(false);
  }

  function tryTheGameAgain() {
    fetchCountries();
    setScore(0);
    setShowScore(false);
    setIsShow(false);
    setDisabled(false);
  }

  return {
    handleClick,
    countries,
    handleShowBtn,
    isShow,
    score,
    isCorrect,
    setIsCorrect,
    tryTheGameAgain,
    showScore,
    setShowScore,
    letters,
    btnRef,
    disabled
  };
}

export default useCountry;
