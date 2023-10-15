import {useState} from "react";

function App() {
  const [click1, toggle1]=useToggle(false);
  const [click2, toggle2]=useToggle(false);
  const [click3, toggle3]=useToggle(false);
  const [click4, toggle4]=useToggle(false);
  const [click5, toggle5]=useToggle(false);


  return(
   <>
    <button onClick={toggle1}>{click1  ? 'hello ' : 'bye'}</button>
    <button onClick={toggle2}>{click2  ? 'hello ' : 'bye'}</button>
    <button onClick={toggle3}>{click3  ? 'hello ' : 'bye'}</button>
    <button onClick={toggle4}>{click4  ? 'hello ' : 'bye'}</button>
    <button onClick={toggle5}>{click5  ? 'hello ' : 'bye'}</button>
   </>
  )
}

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((state) => !state);
  return [state, toggle];
};

export default App;