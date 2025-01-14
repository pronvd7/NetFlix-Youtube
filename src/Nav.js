import React, {useState, useEffect} from 'react'
import './Nav.css';
const Nav = () => {
    const [show, handleShow] = useState(false);
    const  transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    
    useEffect(()=>{
           window.addEventListener('scroll', transitionNavBar);
        return () =>{
            window.removeEventListener("scroll", transitionNavBar)
        }
    },[])

    return (
        <div  className={`nav ${ show && "nav__black"}`}>
         <div className='nav__contents'>
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className="nav__logo" alt=""/>
            <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' className="nav__avatar" alt=""/>
         </div>
        </div>
    )
}

export default Nav
