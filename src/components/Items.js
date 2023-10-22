import { useState, useEffect  } from "react";
import Item from "./Item";

export default function Items(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/items").then((res)=>{
            return res.json()
        })
        .then((json_response)=>{
            setData(json_response);
        });
    })
    var item = {status:"done", task:"커피마시기", due:"20231009"}

    return <table>
        <tbody>
            <tr>
                <td></td>
                <td>Task</td>
                <td>Due</td>
                <td></td>
            </tr>
            {data.map((item)=>{
                return <Item key={item.id} item={item}/>
            })}
        </tbody>
    </table>
}