import React,{useEffect,useRef} from 'react';
import {Link} from "react-router-dom";
import gsap from 'gsap';
import imagedata from './images';
import couple_pic from "../image/couple.svg";
import city from "../image/city.svg";
import scmm from '../image/scmm.png';
const Container = () => {
    const data = imagedata();
    let firstdiv = useRef(null);
    let seconddiv = useRef(null);
    let thirddiv = useRef(null);

    useEffect( () =>{
        gsap.to(firstdiv, { delay:3,duration:2, opacity:1, ease: "power3.out", x: -40 });
        gsap.to(seconddiv, { delay:1 ,duration:2, opacity:1, ease: "power3.out", x: 500 });
        gsap.to(thirddiv, { delay:2,duration:2, opacity:1, ease: "power3.out", x: 10 });
        
        },[]);
    return ( 
        <>
        <div className="container-wrapper">
            <div className="wrapper">
             <div className="container-content">
                 <h5>Welcome to the future of investing</h5>
                 <h1>Invest in ideas <br></br>with Smallcases</h1>
                 <p>smallcases are modern investment products that help you <br />build a low-cost, diversified & long-term portfolio.</p>
                 <ul>
                    {data.map(image =>{ return <li key={image.id}><Link to=""><img src={image.image} alt="" title={image.title} /></Link></li>
   
                    })}

                 </ul>
                 <button className="login-with-broker">Log in with your broker</button>
                 <button className="create-account">Open an account</button>

             </div>
            </div>
            <div className="couple-background-image">
             <img src={couple_pic} alt=""  ref={ el=> thirddiv = el}/>
             <div className="singlecard" ref={ el=> firstdiv = el}>
                 <img src={scmm} alt="" />
                 <h3>Affortable ?Hoiusing</h3>
                 <p>Companies participating in and benefiting from affordable housing projects</p>
                 <h5>CAGR</h5>
                 <h6>19.25%</h6>
                 <div className="a">
                    <div className="b">
            
                    </div>
            
                </div>
             </div>
            </div>
            <div className="city-background-image" ref={ el=> seconddiv = el}>
             <img src={city} alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Container;