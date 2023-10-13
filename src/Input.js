import React, {useState} from "react";

function Input() {
    const [inputs, setInputs] = useState({
        subject :'',
        score :'',
    });

    return ( 
    <>
    <div>
        <h2>성적: {inputs.subject}{inputs.score}</h2>
        <input name="subject" placeholder="수학" value={inputs.subject}></input>
        <input name="score" placeholder="99" value={inputs.score}></input>
    </div>
    </>
    )
}

export default Input;