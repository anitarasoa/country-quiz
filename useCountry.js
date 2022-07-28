import React, { useEffect, useState, useRef } from 'react'
import {randomeFunction} from './utilities'
import Questions from './Questions'

function useCountry() {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const btnRef = useRef(null)
  const [disabled, setDisabled] = useState(false)
  const [letters, setLetters] = useState(['A', 'B', 'C', 'D'])

  async function fetchCountries() {
    setLoading(true)
    const URL_API = 'https://restcountries.com/v3.1/all'
    const response = await fetch(URL_API)
    const countries = await response.json()
    getRandomeCountry(countries)
    setLoading(false)
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  function getRandomeCountry(countries) {
    const rightAnswer = countries[randomeFunction(countries)]
    const option1 = countries[randomeFunction(countries)]
    const option2 = countries[randomeFunction(countries)]
    const option3 = countries[randomeFunction(countries)]

    const randomOptions = [rightAnswer.name, option1.name, option2.name, option3.name]

    const sortedOptions = randomOptions.sort(() => {
      return 0.5 - Math.random()
    })

    const randomQuestion = Questions[randomeFunction(Questions)]

    const countryQuiz = {
      question: randomQuestion,
      country: rightAnswer,
      flag: rightAnswer.flags,
      capital: rightAnswer.capital,
      answers: sortedOptions,
      correctAnswer: rightAnswer.name,
      userAnswer: '',
    }
    setCountries([countryQuiz])
  }

  function handleClick(e) {
    e.preventDefault()
    const userGuess = e.target
    let userAnswer = userGuess.value;
    let correctAnswer = countries && countries[0]?.correctAnswer?.common;
    
    if (userAnswer !== correctAnswer) {
      setIsCorrect(false)
      setShowScore(false)
      btnRef.current.classList.add('correct');
      userGuess.classList.add('incorrect');
    } else {
      setIsCorrect(true);
      setScore(score + 1);
      btnRef.current.classList.add('correct');
      userGuess.classList.add('correct');
    }

    setIsShow(!isShow)
    setDisabled(true)
  }

  function handleShowBtn() {
    btnRef.current.classList.remove('correct')
    setDisabled(!disabled)
    fetchCountries()
    setIsShow(false)
    setShowScore(false)
  }

  function tryTheGameAgain() {
    fetchCountries()
    setScore(0)
    setShowScore(false)
    setIsShow(false)
    setDisabled(false)
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
    disabled,
    loading
  }
}

export default useCountry
