import React from 'react';
import { auth } from '../firebase';  
import Todo from './Todo/Todo';
import './Main.css'
import BackgroundAnimate from './BackgroundAnimate';
const Mainpage = () => {
  
    // Signout function
    const logout = () => {
        auth.signOut();
    }
      
    return (
        <> 
            <Todo />
            <BackgroundAnimate />
            <div className='container'>
                <button className='button' onClick={logout}>Logout</button>
            </div>
            
        </>
    );
}
  
export default Mainpage;