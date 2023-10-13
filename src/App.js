import React,{ useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(
    ()=>{
    console.log('useEffect');
    document.title =`you click ${count} times`;
  })

  return(
    <>
      <p>you click &{count} times</p>
      <button onClick={()=>{
        console.log('click');
        setCount(count+1)
      }}>CLICK</button>
    </>
  )
}
export default App;