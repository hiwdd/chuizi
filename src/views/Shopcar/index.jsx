import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Tabbar from '../../components/Tabbar/index';
import './index.scss';

class Notshop extends Component {
  render() {
    return (
      <div className="notshop">
        <NavBar style={{ fontSize: '18px', color: '#fff' }} className="not-top">
          购物车
        </NavBar>
        <div className="not-center">
          <div className="not-cen">
            <h3>购物车暂无商品</h3>
            <p>添加到购物车的商品将会显示在这里</p>
            <Link to="/">现在选购</Link>
          </div>
        </div>
        <Tabbar />
      </div>
    );
  }
}

class Shopcar extends Component {
  render() {
    return (
      <div className="shopcar">
        <Notshop />
      </div>
    );
  }
  componentDidMount() {
    document.title = '我的购物车';
  }
}

export default Shopcar;
