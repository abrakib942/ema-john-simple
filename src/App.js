import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Inventory from "./components/inventory/Inventory";
import Login from "./components/login/Login";
import Order from "./components/order/Order";
import RequiredAuth from "./components/requiredAuth/RequiredAuth";
import Shipment from "./components/shipment/Shipment";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/inventory"
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequiredAuth>
              <Shipment />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
