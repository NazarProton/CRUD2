import React from "react";
import Home from "./pages/Home";
import Cart from "./components/orderList";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
