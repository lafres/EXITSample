import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  const onCLick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log('I run all the time');

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [keyword, counter]);
  return (
    <>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here.."
        />
        <h1>{counter}</h1>
        <button onClick={onCLick}>Click me</button>
      </div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      </div>
    </>
  );
}

export default App;
