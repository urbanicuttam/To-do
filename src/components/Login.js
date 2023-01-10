
import React from 'react';
import { signInWithGoogle } from '../firebase.js';
import GoogleButton from 'react-google-button'
const Login = () => {
      
    return (
        <div>
            <center>
                <GoogleButton style={{"marginTop" : "200px"}} 
                onClick={signInWithGoogle} />
            </center>
        </div>
    );
}
  
export default Login;