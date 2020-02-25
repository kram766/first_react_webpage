import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/component/Home';
import Header from './Components/Header';
import Signup from './Components/component/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      </BrowserRouter>

    </div>
  );
}

export default App;
    

