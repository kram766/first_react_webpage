import React from 'react';
import Header from './Components/Header';
import Container from './Components/Container';
import SmallcaseContainer from './Components/SmallcaseMaincontainer';
import SmallcaseSample from './Components/Smallcasesample';
import Smallcasedifftype from './Components/Smallcase_from_difftype';
function App() {
  return (
    <div className="App">
    <Header />
    <Container />
    <SmallcaseContainer />
    <SmallcaseSample />
    <Smallcasedifftype />
    </div>
  );
}

export default App;
    

