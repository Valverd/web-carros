import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Car from "./pages/car";
import Dashboard from "./pages/dashboard";
import New from "./pages/dashboard/new";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<Car/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/new" element={<New />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}