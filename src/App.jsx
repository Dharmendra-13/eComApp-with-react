import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Tv from "./pages/Tv";
import Men from "./pages/Men";
import Women from "./pages/Women";
import BabyKids from "./pages/BabyKids";
import HomeFurniture from "./pages/HomeFurniture";
import Sport from "./pages/Sport";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="tv-appliance" element={<Tv />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="baby-kids" element={<BabyKids />} />
          <Route path="home-furniture" element={<HomeFurniture />} />
          <Route path="sports-more" element={<Sport />} />
          <Route path="flights" element={<Flights />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
