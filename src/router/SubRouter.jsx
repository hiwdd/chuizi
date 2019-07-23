//二级路由组件

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home/index';
import Classify from '../views/Classify/index';
import Mine from '../views/Mine/index';
import Shopcar from '../views/Shopcar/index';
import Detail from '../views/Detail/index';
import NotFound from '../views/NotFound/index';

class SubRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/classify" component={Classify} />
        <Route path="/shopcar" component={Shopcar} />
        <Route path="/mine" component={Mine} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default SubRouter;
