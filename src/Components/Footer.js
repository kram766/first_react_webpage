import React, { Component } from 'react';
import image from '../image/logo-full.svg';
import { Link } from 'react-router-dom';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="footer">
                <div className="footer-section">
                    <div className="footer-content">
                        <div className="footer-upper">
                            <div className="stretch-footer">
                                <Link to="/"><img src={image} alt="" /></Link>
                                <p>smallcase Technologies builds platforms & investment products to invest better in Indian equities. A smallcase is a basket of stocks/ETFs weighted intelligently to reflect an idea</p>
                                <h4>CIN: HT51247ZXD4752HH</h4>
                                <h4>GSTIN: LJDE147AWSDE57</h4>
                                <h4>RKFW Research Analyst IND1247DE</h4>
                            </div>
                            <div className="footer-content-product">
                                <h3>Company</h3>
                                <p>About</p>
                                <p>Blog</p>
                                <p>Press</p>
                                <p>careers</p>
                                 
                            </div>
                            <div className="footer-content-product">
                                <h3>Products</h3>
                                <p>Smallcase on 5paisa</p>
                                <p>Smallcase on Alice Blue</p>
                                <p>Smallcase on AxisDirect</p>
                                <p>Smallcase on Edelweiss</p>
                                <p>Smallcase on HDFC Sec</p>
                                <p>Smallcase on IIFL Sec</p>
                                <p>Smallcase on Kotak Sec</p>
                                <p>Smallcase on Zerodha</p>
                            </div>
                            <div className="footer-content-product">
                            <h3>Fine Print</h3>
                                <p>Privacy</p>
                                <p>Disclouser</p>
                                <p>Press</p>
                                <p>careers</p>    
                            </div>
                        </div>
                        <div className="footer-down">

                        </div>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Footer;