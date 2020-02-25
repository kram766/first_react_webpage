import React, { Component } from 'react';
import Container from '../Container';
import SmallcaseContainer from '../SmallcaseMaincontainer';
import SmallcaseSample from '../Smallcasesample';
import Smallcasedifftype from '../Smallcase_from_difftype';
import InvestCreator from '../InvestCreator';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Container />
            <SmallcaseContainer />
            <SmallcaseSample />
            <Smallcasedifftype />
            <InvestCreator />
            </>
         );
    }
}
 
export default Home;