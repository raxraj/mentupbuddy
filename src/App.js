import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'

//Views Import
import Home from './views/Home'
import AskQuestion from './views/AskQuestion'
import Signin from './views/Signin'
import Question from './views/Question'

//Import Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/ask' component={AskQuestion}></Route>
      <Route exact path='/signin' component={Signin}></Route>
      <Route exact path='/question' component={Question}></Route>
      <Footer/>

    </div>
  );
}

export default App;
