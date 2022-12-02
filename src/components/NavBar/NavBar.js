import React from 'react';
import './dist/NavBar.css';
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => (isActive ? ' active' : 'page-name');

class NavBar extends React.Component {
   constructor(props) {
      super(props);
      
      this.btn = React.createRef()
      this.menu = React.createRef()
      this.opener = this.opener.bind(this)
   }

   opener(){
      if(this.menu.current.style.display === 'none'){
         this.menu.current.style.display = 'block'
         this.btn.current.style.animation = 'opener 0.8s linear forwards'
      }else{
         this.menu.current.style.display = 'none'
         this.btn.current.style.animation = 'closer 0.8s linear forwards'
      }
     
   }

   render(){
      return (
         <div className="nav-bar">
         <div className="navy">
          <div className="left-side">
               <NavLink to=""><img src="logo.png" alt="" /></NavLink>
               <NavLink to=""><h1 className="title">DraftNote</h1></NavLink>
          </div>
          <div className="right-side">
            <div className='page-name'><NavLink className={setActive} to="/notes">my notes</NavLink></div>
            <div ref={this.btn} onClick={this.opener} className="btn-menu"></div>
          </div>
    
    
         </div>
          <dl ref={this.menu}> 
            <NavLink className='dt' to="/todo"><dt>activities</dt></NavLink>
            <NavLink className='dt'  to="/contacts"><dt>contacts</dt></NavLink>
          </dl>
       </div>
      )
   }
  
}


  



export default NavBar;
