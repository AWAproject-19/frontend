import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <Switch>
      <Route exact path="/Home" component={()=> <Home authorized={false}/>} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/" component={Signup} />
    </Switch>
  );
}

export default App;
