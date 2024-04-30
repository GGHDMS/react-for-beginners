import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
