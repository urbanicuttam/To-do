
import React from 'react';
import { signInWithGoogle } from '../firebase.js';
import GoogleButton from 'react-google-button'
import BackgroundAnimate from './BackgroundAnimate'
const Login = () => {
      
    return (
        <div>
            <h1>Hello! {localStorage.getItem("name")}</h1>
            <center>
                <p>Please Login to make your ToDo!</p>
                <GoogleButton style={{"marginTop" : "200px"}} 
                onClick={signInWithGoogle} />
            </center>
            <BackgroundAnimate />
        </div>
    );
}
  
export default Login;