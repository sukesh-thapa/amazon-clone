import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const signIn = e => {  
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push('/')
    })
    .catch(error => alert(error.message));

   }
   const register = e => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {

        if (auth) {
            history.push('/')
        }
    })
    .catch(error => alert(error.message));


}

    return (
        <div className="login">
        <Link to="/">
            <img 
                classsName="login__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                
                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
            </form>

            <p>By signing in, you agree to the Amazon conditions of Use and Safe.
             Please see our Privacy Notice, our Cookies Notice and our Notice Ads Notice</p>

             <button onClick={register} className="login__registerButton">Create an Amazon New Account</button>
        </div>
        </div>
    )
}

export default Login
