import React from "react";
import "./Work.css";
import image from "./images/profile5.png";
export default function Work() {
  return (
    <div className='details'>
      <div className='myDetails'>
        <h3>Hello, I'm</h3>
        <p className='name'>Lewis Nathaniel</p>
        <p className='small'>UI &amp; UX </p>
        <ul className='socialMedia'>
          <li>
            <a href='#'>
              <i class='fa fa-behance' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-google' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-facebook' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
        <div className='buttons'>
          <button className='btnHire'>HIRE ME</button>
          <button className='btnResume'>SEE MY RESUME</button>
        </div>
      </div>
      <div className='myImage'>
        <img src={image} alt='' />
      </div>
    </div>
  );
}
