
import "./App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
// import { useCart } from "./context/cartContext";
// import { useMenu } from "./context/menuContext";
//---Menu.jsx와 Cart.jsx에서 직접 useCart, useMenu를 쓰니까 App.jsx에서는 안받아도 됨


function App() {
  
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Menu/>}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
