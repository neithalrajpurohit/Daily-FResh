import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Filter } from "./components/Filter";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
