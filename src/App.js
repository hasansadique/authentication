import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import ProtectedRoute from './ProtectedRoute';


const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route exact path='/' element={<ProtectedRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
