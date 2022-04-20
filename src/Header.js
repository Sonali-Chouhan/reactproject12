import React from "react";
import { Link } from "react-router-dom";


export default class Header extends React.Component {

  render() {
    return (
      <div className="header">

      
      <nav>   
      <Link to="/userForm">Form</Link>
      <Link to="/userTable">Table</Link>
      <Link to="/userProfile">Profile</Link>
      </nav>  

            
      </div>
    )
  }
}
