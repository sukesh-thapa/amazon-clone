import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51IOPhTDc9S9ikkfBNwxsbacwrrqv2LgjFf1NTHpXrNaoM51OcBHupq1BZU1vxzG1IZPYk7uoVFSowqetkGpeXzMG006hMcYqUp');


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // run once
    auth.onAuthStateChanged(authUser => {
      console.log("the user is ", authUser);

      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
        <div className="app">   
          <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
              <Header />
              <Checkout/>            
          </Route>
          {/* <Route path="/home">
              <Home />            
          </Route> */}
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>  
        </div>
    </Router>
  );
}

export default App;
