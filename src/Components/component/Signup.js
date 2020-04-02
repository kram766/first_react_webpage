import React, { Component } from 'react';
import Headers from '../Header';
import {Link} from 'react-router-dom';
import '../css/Signup.css';
import imagedata from '../images';
import Slider from 'react-slick';
import Footer from '../Footer';
class Signup extends Component {
    state = {  }
    render() { 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
          };
        return ( 
            <>
            <Headers />
            <div className="signup_page">
            <div className="signup-content">
                <div className="signup-credential-content">
                    <h4>Start investing in smallcases</h4>
                    <h1>Open a trading & demat account</h1>
                    <h3>Sign up with a broker</h3>
                    <p>Enter your email ID to get started</p>
                    <form>
                        <label>Email ID</label>
                        <input type="text" placeholder="karanRaghwan@exmaple.com" name="email" />
                        <div className="checkbox">
                            <div className="checkbox-content">
                            <span><input type="checkbox" name="chack" value="check" /></span>
                            </div>
                            <div className="checkbox-content">
                                <b>Subscribe to our newsletter</b>
                                <p>Investment insights, news & views delivered to your inbox every alternate Wednesday</p>
                            </div>
                        </div>
                        <Link className="continue-forEmail" to="">Continue</Link>
                    </form>
                </div>
                <div className="signup-credential-content">
                    <div className="signup-smallcase-content">
                        <h4>Already have an account with a broker?</h4>
                        <p>Login with your existing brokerage account to get started</p>
                        <ul>
                           {imagedata().map(item=>{ return <li key={item.id}><img src={item.image} alt="" />{item.title}</li>})}
                        </ul>
                    </div>
                    <div className="slider">
                       <Slider {...settings}>
                        <div className="slide-content"><p>Smallcases are tailor-made for long-term investments</p><b>R Raghwan</b></div>
                        <div className="slide-content"><p>smallcases are transparent, straight-forward & familiar</p><b>Kamlesh pandey</b></div>
                        <div className="slide-content"><p>Investing in two clicks is a breath of fresh air</p><b>Ravi Raj</b></div>

                        </Slider>
                    </div>   
                </div>
            </div>
            </div>
            <Footer />
            </>
         );
    }
}
 
export default Signup;