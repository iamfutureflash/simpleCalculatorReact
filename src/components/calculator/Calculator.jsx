import React, { useState } from 'react'
function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ['/', '*', '+', '-', '.'];
    const updateCalc = (value) => {
        if (ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value)
        if (!ops.includes(value)) {
            setResult(eval((calc + value).toString()));
        }
    }
    const calculate=()=>{
        setCalc(eval((calc).toString()));
        setResult(" ");
    }
    const clearCalc = () => {
        if(calc==' '){
            return; 
        }
        else{
            try{
                const value = calc.slice(0,-1);    
                // alert(value);
                if(ops.includes(value.slice(-1))){
                    // setResult(value + " hi");
                    setResult(eval((value).toString()));
                }    
            }
            finally{
                const value = calc.slice(0,-1);
                setCalc(value);
                setResult(eval(value.toString()));
            }
            // alert(eval(value.toString()))
        }
    }
    const deleteResult = () => {
        if(calc==' '){
            return; 
        }
        const value =" ";
        setCalc(value);
        setResult(eval((value).toString()))
    }
    return (
        <div className="calculator bg-gray-500 h-fit mx-4 my-4 rounded-xl py-4 px-1 flex flex-col w-fit">
            <div className="result bg-green-500 rounded-xl mx-4 py-4 flex justify-end flex-wrap ">
                <div className="screen text-6xl font-extralight uppercase  px-4 ">
                    {result ? <sub className='text-gray-500 text-4xl font-extralight'>{result}</sub> : <sub className='text-gray-800 font-extralight text-4xl mr-2'></sub>}
                    {calc || " "}
                </div>
            </div>
            <br />
            <div className="buttons text-white space-y-4  px-4 py-4">
                <div className="g1 ">
                </div>
                <div className="g1 ">
                    <button onClick={() => updateCalc('7')}>7</button><button onClick={() => updateCalc('8')}>8</button><button onClick={() => updateCalc('9')}>9</button><button onClick={() => updateCalc('/')}>/</button>
                </div>
                <div className="g1 ">
                    <button onClick={() => updateCalc('4')}>4</button><button onClick={() => updateCalc('5')}>5</button><button onClick={() => updateCalc('6')}>6</button><button onClick={() => updateCalc('+')}>+</button>
                </div>
                <div className="g1 ">
                    <button onClick={() => updateCalc('1')}>1</button><button onClick={() => updateCalc('2')}>2</button><button onClick={() => updateCalc('3')}>3</button><button onClick={() => updateCalc('-')}>-</button>
                </div>
                <div className="g1 ">
                    <button onClick={() => updateCalc('0')}>0</button><button onClick={() => updateCalc('.')}>.</button><button onClick={() => updateCalc('*')}>*</button>
                    <button className='bg-red-400 hover:bg-red-500' onClick={calculate}>=</button>
                </div>
                <div className="space-x-2 flex">
                    <img className='backspace' onClick={clearCalc} id="clear" src="./backspase.svg" alt="backspace button" srcset="" />
                    <button className='px-3' onClick={deleteResult} id="clear">AC</button>
                </div>

            </div>
        </div>
    )
}

export default Calculator