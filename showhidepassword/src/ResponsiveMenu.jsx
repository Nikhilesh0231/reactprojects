import React, { useState } from "react";
import './ResponsiveMenu.css'

export default function ResponsiveMenu() {
  let [menuStatus,setMenuStatus] = useState(false);
  return (
    <>
    <button className="micon" onClick={()=>setMenuStatus(!menuStatus)}>
      { menuStatus 
      ?
      <span>&times;</span>
      :
      <span>&#9776;</span>
    }
      </button>
    <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cource</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </>
  );
}
