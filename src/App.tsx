import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./components/NewApp";
import Success from "./components/Success";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;