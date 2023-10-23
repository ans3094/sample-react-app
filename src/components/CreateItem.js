import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateItem(){
    const [values, setValues]= useState({
        task:"",due:""
    })

    const hadleChange =(event)=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const navigate= useNavigate();
    // const ref = useRef();

    // useEffect(()=>{
    //     ref.current.focus();
    // })

    const onSubmit = (event) =>{
        event.preventDefault();
        fetch("http://localhost:3001/items",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({task: values.task, due:values.due, status :"todo"})
        }).then((res)=>{
            if(res.ok){
                alert('Created New Item !');
                navigate("/todo")

            }
        })
    }
    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <p>Task</p>
            <input type="text" name="task" value={values.task} onChange={hadleChange} ></input>
            <p>Due</p>
            <input type="text" name="due" value={values.due} onChange={hadleChange}></input>
        </div>
        <button>Create</button>
    </form>
}