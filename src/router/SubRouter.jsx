//二级路由组件

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home/index';
import Classify from '../views/Classify/index';
import Mine from '../views/Mine/index';
import Shopcar from '../views/Shopcar/index';
import Detail from '../views/Detail/index';
import NotFound from '../views/NotFound/index';
import Address from '../views/Mine/Address';
import Coupon from '../views/Mine/Coupon';
import Login from '../views/Mine/Login';
import Register from '../views/Mine/Register';
import Other from '../views/Mine/Other';

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
        <Route path="/address" component={Address} />
        <Route path="/coupon" component={Coupon} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/other" component={Other} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default SubRouter;
