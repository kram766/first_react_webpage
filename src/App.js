import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/component/Home';
import Signup from './Components/component/Signup';
import Jobs from './Components/component/Jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/jobs" component={Jobs} />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
    

