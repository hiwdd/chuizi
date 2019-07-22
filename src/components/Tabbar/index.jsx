import React from 'react';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.scss';

class Tabbar extends React.Component {
  render() {
    return (
      <ul className="tabbar">
        <li>
          <NavLink exact to="/">
            <Icon style={{ fontSize: '20px' }} type="home" />
            <span>首页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/classify">
            <Icon style={{ fontSize: '20px' }} type="unordered-list" />
            <span>分类</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopcar">
            <Icon style={{ fontSize: '20px' }} type="shopping-cart" />
            <span>购物车</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mine">
            <Icon style={{ fontSize: '20px' }} type="user" />
            <span>个人中心</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Tabbar;
