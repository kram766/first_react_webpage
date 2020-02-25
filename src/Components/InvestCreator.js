import React, { Component } from 'react';
import scroll from '../image/creator-scroll.mp4';
import {Link} from 'react-router-dom';
class InvestCreator extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="creator">
                <div className="creator-content content">
                    <h1>Managed by India's top financial experts</h1>
                    <p>smallcases are built & managed by SEBI licensed professionals, using quantitative models & algorithms to screen & weight constituents</p>
                    <div className="creator-button-link">
                        <Link className="see-creators" to="">See All Creators</Link>
                        <Link className="hear-creators" to="">Hear the Creators</Link>
                    </div>
                </div>
                <div className="creator-content creator-content-video">
                <video autoPlay={true} playsInline={false}  loop={true} src={scroll} type="video/mp4"></video>
                </div>

            </div>
            </>
         );
    }
}
 
export default InvestCreator;