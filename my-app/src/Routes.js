import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Resources from './pages/Resources';
import Concept from './pages/Concept';

const Routes = () => (
    <Switch >
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/topics' component={Topics}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/concept' component={Concept}></Route>
    </Switch>
  );
export default Routes;