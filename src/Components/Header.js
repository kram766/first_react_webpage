import React from 'react';
import {Link} from "react-router-dom";
import image from '../image/logo-full.svg';
import '../Components/css/Header.css';

const Header = () => {
    return ( 
        <>
        <div className="header">
            <div className="header-content section_1">
             <ul>
                 <li><Link to=""><img src={image} alt="" /></Link></li>
                 <li><Link to="">Discover</Link></li>
                 <li><Link to="">Creator</Link></li>
             </ul>
            </div>
            <div className="header-content section_2">
              <ul>
                  <li><Link to="">We're Hiring</Link></li>
                  <li><Link to="">Blog</Link></li>
                  <li><Link to="" >Sign Up</Link></li>
                  <li><Link className="login" to="">Login</Link></li>
                </ul>  
            </div>
        </div>
        </>
     );
}
 
export default Header;