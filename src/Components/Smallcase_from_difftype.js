import React, {useRef} from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import weather from '../image/icon-awi.png';
import smart_beta from '../image/smart_beta.png';
import idea from '../image/ideas.svg';
import model from '../image/model.svg';
const Smallcasedifftype = () => {
    // use ref for our element
    const firstdiv = useRef(null);
    // all ref to be observed
    const intersection = useIntersection(firstdiv, {
        root:null,
        rootMargin:"0px",
        threshold:0.5

    });

    // animation for fading in
    const fadeIn = element =>{
        gsap.to(element,1, {
            opacity:1,
            y:-50,
            ease: "power4.out"
        });
    };

    // amination for fading out
    const fadeOut = element =>{
        gsap.to(element,1, {
            opacity:0,
            y:0,
            ease: "power4.out"
        });    
    };
    //checking to see when the viewport is visible to the user
    intersection && intersection.intersectionRatio <0.5
    ?fadeOut(".difftype-card")
    :fadeIn(".difftype-card")
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
                           <div className="difftype-card" ref={firstdiv}>
                               <img src={weather} alt=""></img>
                               <h4>All Weather Investing</h4>
                               <p>The recession proof way of building long-term wealth</p>
                           </div>
                           <div className="difftype-card">
                               <img src={smart_beta} alt=""></img>
                               <h4>Smart Beta</h4>
                               <p>Quantitative strategies built with blue-chip stocks , with an aim to beat the market</p>
                               
                           </div>
                           <div className="difftype-card">
                               <img src={idea} alt=""></img>
                               <h4>Thematic & Sectoral</h4>
                               <p>Invest in disruptive ideas & long-term trends around you impacting the Indian economy</p> 
                            </div>
                            <div className="difftype-card">
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