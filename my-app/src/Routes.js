import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Resources from './pages/Resources';
import Concept from './pages/Concept';
import Test from './pages/Test';
import Login from './components/Login'

const Routes = () => (
    <Switch >
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/topics' component={Topics}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/concept/:slug' component={Concept}></Route>
      <Route exact path='/what' component={Test}></Route>
    </Switch>
  );
export default Routes;