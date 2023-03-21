import './App.css';
import CardDetails from './Components/CardDetails/CardDetails';
import Header from './Components/Header/Header';
import Items from './Components/Items/Items';
import Cart from "./Components/Cart/Cart"
import { useContext } from 'react';
import { Context } from './Components/Context/Context';

function App() {
  const { cart } = useContext(Context)
  
  return (
    <div className="App">
      <Header />
      <Items />
      {cart.length > 0 && <Cart />}
      <CardDetails />
    </div>
  );
}

export default App;
