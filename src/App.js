import {useEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time!");
  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 2)
      console.log("SEARCH FOR:", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when keyword changes");
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;