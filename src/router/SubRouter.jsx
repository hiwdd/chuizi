import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home/index';
import Classify from '../views/Classify/index';
import Mine from '../views/Mine/index';
import Shopcar from '../views/Shopcar/index';
import NotFound from '../views/NotFound/index';

class SubRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/classify" component={Classify} />
        <Route path="/shopcar" component={Shopcar} />
        <Route path="/mine" component={Mine} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default SubRouter;
