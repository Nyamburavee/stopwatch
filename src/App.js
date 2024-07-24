import React from "react"

export default function App() {
    const [timer, setTimer] = React.useState(0)
    
    function timeCount (){
        setTimer((timer) => timer + 1)
        
    }
   /* const startTimer = () => {
            window.myTimer = setInterval(() =>{
                setTimer((timer) => timer + 1);
            }, 1000)
            
            
    };*/
    const startTimer = ()=>{
        window.myTimer = setInterval(timeCount, 1000);
    }
    
    const stopTimer = () =>{
        if(window.myTimer){
        clearInterval(window.myTimer)};
    };
    
    const resetTimer = () =>{
        clearInterval(window.myTimer);
        setTimer(0);
    };
    
    return (
        <div className="container flex flex-col justify-center items-center
            p-10 rounded-lg bg-green-300 mt-20 w-[450px] ">
          <h1 className=" text-3xl font-bold text-white mb-8"> Stopwatch Timer</h1>
          <span className=" text-white font-bold text-xl">{timer % 60} Secs</span>
          <span className=" text-white font-bold text-xl mb-4">{Math.trunc(timer / 60)} Mins </span>
          <div className=" flex flex-col justify-center">
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>


        </div>
    )
}