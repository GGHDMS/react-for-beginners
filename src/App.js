import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route exact path="/movie" element={<Detail />}></Route>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;