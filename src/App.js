import {useEffect, useState} from "react";

function Hello() {
  const byeFn = () => {
    console.log("destroyed :(");
  };

  const hiFn = () => {
    console.log("created :)");
    return byeFn;
  };

  useEffect(hiFn, []);

  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);

  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}


function App() {

  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      < button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;