import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className='navBar'>
      <div className='logo'>
        <div className='circle'>M</div>
        <div>
          <p>
            <span>
              Lewis
              <br />
              Nathaniel
            </span>
            <br />
            UI &amp; UX Designer
          </p>
        </div>
      </div>
      <div className='listItem'>
        <ul>
          <Link to='/' style={{textDecoration: "none"}}>
            <li>WORK</li>
          </Link>
          <Link to='/About' style={{textDecoration: "none"}}>
            <li>ABOUT ME</li>
          </Link>
          <Link to='/Blog' style={{textDecoration: "none"}}>
            <li>BLOG</li>
          </Link>
          <Link to='/Contact' style={{textDecoration: "none"}}>
            <li>CONTACT</li>
          </Link>

          <li className='btn' style={{textDecoration: "none"}}>
            HIRE ME
          </li>
        </ul>
      </div>
    </div>
  );
}
