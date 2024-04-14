import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Concept from './pages/Concept';
import Test from './pages/Test';


const Routes = () => (
    <Switch >
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/topics' component={Topics}></Route>
      <Route exact path='/concept/:slug' component={Concept}></Route>
      <Route exact path='/what' component={Test}></Route>
    </Switch>
  );
export default Routes;

// <Route exact path='/resources' component={Resources}></Route>