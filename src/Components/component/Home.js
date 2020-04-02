import React, { Component } from 'react';
import Headers from '../Header';
import Container from '../Container';
import SmallcaseContainer from '../SmallcaseMaincontainer';
import SmallcaseSample from '../Smallcasesample';
import Smallcasedifftype from '../Smallcase_from_difftype';
import InvestCreator from '../InvestCreator';
import Footer from '../Footer';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Headers />
            <Container />
            <SmallcaseContainer />
            <SmallcaseSample />
            <Smallcasedifftype />
            <InvestCreator />
            <Footer />
            </>
         );
    }
}
 
export default Home;