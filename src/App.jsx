// import Final from "../";
import data from "./data"
import { useState } from "react";
const App = () => {
  const [count,setCount] = useState(1);
  const [text,setText] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log({count});
    // const counted=(e.target.value);
    const amount =parseInt(count)     //converting the string type to integer
    setText(data.slice(0,amount))     //js method to get portion of the array
    // const slicedText=data.slice(1,amount);
    console.log(text);
  }
  return (
    <section className="section-center">
      <h4>What to get creative?</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs:</label>
      <input type='number'name='amount'step='1' id='amount' value={count} max='8' min='1' onChange={(e)=>setCount(e.target.value)}></input>
      <button type='submit' className="btn">Submit</button>
    </form>
    <article className="lorem-text">
    {text.map((text,index)=>{
      return (
        <div>
          <p key={index}>{text}</p>
        </div>
      )
    })}
    </article>
    </section>
  );
};
export default App;

