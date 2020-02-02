import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'

//Views Import
import Home from './views/Home'
import AskQuestion from './views/AskQuestion'
import Signin from './views/Signin'

//Import Components
import Navigation from './components/Navigation'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/ask' component={AskQuestion}></Route>
      <Route exact path='/signin' component={Signin}></Route>
    </div>
  );
}

export default App;
