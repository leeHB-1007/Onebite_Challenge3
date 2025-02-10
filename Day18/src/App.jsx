import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Link to={"/"}>Home</Link> <br/>
      <Link to={"/Diary"}>Diary</Link> <br/>
      <Link to={"/New"}>New</Link>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/New" element={<New />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
