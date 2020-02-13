import React, {useRef} from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import low_risk from '../image/lower-risk.svg';
import fees from '../image/zero-fees.svg';
import control from '../image/control.svg';

const SmallcaseSample = () => {

      // use ref for our element
      const seconddiv = useRef(null);
      // all ref to be observed
      const intersection = useIntersection(seconddiv, {
          root:null,
          rootMargin:"100px",
          threshold:1
  
      });
  
      // animation for fading in
      const fadeIn = element =>{
          gsap.to(element,1, {
              opacity:1,
              x:-50,
              ease: "power4.out"
          });
      };
  
      // animation for fading out
      const fadeOut = element =>{
          gsap.to(element,1, {
              opacity:0,
              x:0,
              ease: "power4.out"
          });    
      };
      //checking to see when the viewport is visible to the user
      intersection && intersection.intersectionRatio <1
      ?fadeOut(".sample-section")
      :fadeIn(".sample-section")

    return ( 
        <>
        <div className="smallcase-sample">
               <div className="sample-section" ref={seconddiv}>
                <div className="sample-section-content">
                   <img src={low_risk} alt=""/>
                </div>  
                <div className="sample-section-content">
                    <h1>Diversify & lower your risks</h1>
                    <p>Investing in multiple stocks protects you against volatility in a specific stock</p>
                </div>
               </div>              
            <div className="sample-section" ref={seconddiv}>                 
             <div className="sample-section-content">
                <img src={fees} alt=""/>
                </div>
                <div className="sample-section-content">
                   <h1>Zero management fees</h1> 
                   <p>Pay only when you transact, unlike paying everyday for mutual funds</p>
                </div>      
            </div>

            <div className="sample-section" ref={seconddiv}>
            <div className="sample-section-content">
                <img src={control} alt=""/>
                </div>
                <div className="sample-section-content">
                   <h1>Always stay in total control</h1>
                   <p>Invest without lock-in & earn dividends directly in your bank account</p>  
                </div>    
                </div>
        </div>
        <div className="comparision-stock">
            <div className="direct-stock pro-research">
                 <div className="stock-content">
                     <p>Compared to direct stock</p>
                     <h1>smallcases are diversify & backed by professional research</h1>
                     <h4>Why invest in smallcase<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h4> 
                 </div>
                 <div className="stock-image">
                     <img src={low_risk} alt="" />
                 </div>
            </div>
            <div className="direct-stock expense">
                 <div className="stock-content">
                     <p>Compared to other product</p>
                     <h1>smallcases are liquid transparent without expanse ratio</h1>
                     <h4>Why invest in smallcase<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h4>     
                 </div>
                 <div className="stock-image">
                     <img src={fees} alt="" /> 
                 </div>
            </div>
        </div>
        </>
     );
}
 
export default SmallcaseSample;