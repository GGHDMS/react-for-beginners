import {useEffect, useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setTodos(currentArray => [...currentArray, toDo]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input onChange={onChange}
               value={toDo}
               type="text"
               placeholder="Write your to do...." />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((value, index) => (
        <div key={index}>
          <li>{value.toUpperCase()}</li>
        </div>
      ))}
    </div>
  );
}

export default App;