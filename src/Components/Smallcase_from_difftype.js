import React, { useEffect , useRef} from 'react';
import gsap from 'gsap';
import weather from '../image/icon-awi.png';
import smart_beta from '../image/smart_beta.png';
import idea from '../image/ideas.svg';
import model from '../image/model.svg';
const Smallcasedifftype = () => {
    let firstdiv = useRef(null);
    let seconddiv = useRef(null);
    let thirddiv = useRef(null);
    let fourthdiv = useRef(null);

useEffect( () =>{
// TweenMax.from(firstdiv,.8, {opacity:0,y:50,ease: Power3.easeOut})
gsap.to(firstdiv, { duration: 1, opacity:1, ease: "power3.out", y: -20 });
gsap.to(seconddiv, { duration: 1, opacity:1, ease: "power3.out", y: -20 });
gsap.to(thirddiv, { duration: 1, opacity:1, ease: "power3.out", y: -20 });
gsap.to(fourthdiv, { duration: 1, opacity:1, ease: "power3.out", y: -20 });

},[]);
        return ( 
            <>
            <div className="smallcasedifftype">
                <div className="difftype-content">
                    <div className="difftype-content-section1" >
                       <p>Everything you need to build your portfolio</p>
                       <h1>There is a smallcase for everyone</h1>
                       <p>Discover smallcases from different types, risk levels & strategies <br></br> and invest with the <b>core-satellite approach</b></p>
                    </div>
                   <div className="difftype-content-section2">
                       <div className="difftype-card-section">
                           <div className="difftype-card" ref={ el=> firstdiv = el }>
                               <img src={weather} alt=""></img>
                               <h4>All Weather Investing</h4>
                               <p>The recession proof way of building long-term wealth</p>
                           </div>
                           <div className="difftype-card" ref={ el=> seconddiv = el }>
                               <img src={smart_beta} alt=""></img>
                               <h4>Smart Beta</h4>
                               <p>Quantitative strategies built with blue-chip stocks , with an aim to beat the market</p>
                               
                           </div>
                           <div className="difftype-card" ref={ el=> thirddiv = el }>
                               <img src={idea} alt=""></img>
                               <h4>Thematic & Sectoral</h4>
                               <p>Invest in disruptive ideas & long-term trends around you impacting the Indian economy</p> 
                            </div>
                            <div className="difftype-card" ref={ el=> fourthdiv = el }>
                               <img src={model} alt=""></img>
                               <h4>Model-Based</h4>
                               <p>Portfolios based on technical & fundamental factors or strategies of famous investors</p>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
            </>
         );
    }

 
export default Smallcasedifftype;