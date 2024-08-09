import React, { useRef, useState } from 'react'
import data from '../assets/Database.js'
const Quiz = () => {
    let [index,setIndex] = useState(1);
    let [question,setQuestion] = useState(data[index-1]);
    let [disabled,setDisabled] = useState(false);
    let [score,setScore] = useState(0);
    let [game_complete,setGamecomplete] = useState(false);
    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_arr = [option1,option2,option3,option4];
    const check_correct = (e,option) => {
        // console.log(e.target,option)
        console.log(option_arr);
        if (disabled === false) {
            if (question.ans === option) {
                e.target.classList.add("bg-green-200","border-1", "border-green-800");
                e.target.classList.remove("bg-slate-300")
                console.log(e)
                setScore(prev => prev+1);
                setDisabled(true);
                // console.log(e,option)
              } else {
                e.target.classList.add("bg-red-300","border-1", "border-red-800")
                e.target.classList.remove("bg-slate-300")
                option_arr[question.ans-1].current.classList.add("bg-green-200","border-1", "border-green-800")
                option_arr[question.ans-1].current.classList.remove("bg-slate-300")
                setDisabled(true);
            }
        }

    }

    const next = () => {

        if (disabled === true) {
          if (index === data.length) {
            setGamecomplete(true);
            return 0;
          }
          setIndex(prev => prev+1);
            console.log(index);
            setQuestion(data[index]);
            setDisabled(false);
            option_arr.map((opt) => {
                opt.current.classList.remove("bg-red-300","border-1", "border-red-800","bg-green-200","border-1", "border-green-800")
                opt.current.classList.add("bg-slate-300")
            }) 
        }

    }

    const resetQuiz = () => {
        setIndex(1);
        setDisabled(false);
        setScore(0);
        setGamecomplete(false);
    }



  return (

    
   <div className='w-screen h-screen bg-blue-950 flex justify-center items-center'>
  <div className="flex lg:w-1/3 sm:w-3/5 items-center bg-white/30 flex-col p-4 rounded-2xl backdrop-blur-xl">
    <h1 className="text-3xl font-bold text-white w-full px-4 text-center my-3">Quiz App</h1>
    <hr className="my-2 border-1 w-full"/>
    {game_complete? <>
    <h1 className="text-3xl font-bold text-white mt-10">Quiz Completed</h1>
    <h1 className="text-white mt-3 text-xl">Your Score: {score}</h1>
    <button className="flex bg-blue-600 px-8 py-3 mt-3 rounded-md text-white shadow-sm text-lg hover:bg-blue-700 transition-all"
    onClick={resetQuiz}
    >Reset Quiz</button>
    </>: <>
    <div className="text-white text-2xl w-full mb-3 mt-2">{index}. {question.question}</div>
    <ul className="flex flex-col gap-2 w-full">
      <li className="text-xl bg-slate-300 w-full p-4 rounded-xl flex justify-center text-gray-800 font-normal shadow-inner cursor-pointer  transition-all " ref={option1} onClick={ (e) => check_correct(e,1)}>{question.option1}</li>
      <li className="text-xl bg-slate-300 w-full p-4 rounded-xl flex justify-center text-gray-800 font-normal shadow-inner cursor-pointer  transition-all " ref={option2} onClick={ (e) => check_correct(e,2)}>{question.option2}</li>
      <li className="text-xl bg-slate-300 w-full p-4 rounded-xl flex justify-center text-gray-800 font-normal shadow-inner cursor-pointer  transition-all " ref={option3} onClick={ (e) => check_correct(e,3)}>{question.option3}</li>
      <li className="text-xl bg-slate-300 w-full p-4 rounded-xl flex justify-center text-gray-800 font-normal shadow-inner cursor-pointer  transition-all " ref={option4} onClick={ (e) => check_correct(e,4)}>{question.option4}</li>
    </ul>
    <button className="flex bg-blue-600 px-8 py-3 mt-3 rounded-md text-white shadow-sm text-lg hover:bg-blue-700 transition-all" onClick={next}>Next</button>
    <h4 className="text-white mt-2 text-lg">{index} of {data.length} questions</h4>
    </>}
  </div>


</div>
  )
}

export default Quiz