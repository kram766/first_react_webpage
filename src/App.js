import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/component/Home';
import Signup from './Components/component/Signup';
import Jobs from './Components/component/Jobs';
import Explore from './Components/component/Dis-explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={ window.location.pathname || ''}>
      <Route exact path="/jobs" component={Jobs} />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/discover/explore" component={Explore} />
      </BrowserRouter>
    </div>
  );
}

export default App;
    

