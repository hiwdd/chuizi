import React, { Component } from 'react';
import { NavBar, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetDetailList } from '../../store/modules/detail/actionCreator';
import Tabbar from '../../components/Tabbar/index';
import './index.scss';

class Notshop extends Component {
  render() {
    return (
      <div className="notshop">
        <div className="not-center">
          <div className="not-cen">
            <h3>购物车暂无商品</h3>
            <p>添加到购物车的商品将会显示在这里</p>
            <Link to="/">现在选购</Link>
          </div>
        </div>
      </div>
    );
  }
}

class Hasshop extends Component {
  state = {
    flag: true
  };
  render() {
    let { shopcarList } = this.props;
    return (
      <div className="hasshop">
        <ul className="shoplist">
          {shopcarList.map((item, index) => {
            item.cflag = true;
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.cflag}
                  onChange={() => {
                    item.cflag = !item.cflag;
                  }}
                />
                <Link
                  to={`/detail/${item.id}`}
                  onClick={() => {
                    this.props.handleDetail(item);
                  }}
                >
                  <img src={item.shop_info.ali_image} alt="" />
                </Link>
                <div className="wrap-price">
                  <h4>{item.shop_info.title}</h4>
                  <p>{item.attr_info[1].value}</p>
                  <div className="price">
                    <i>￥</i>
                    <span>{item.price}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="shopcount">
          <li>
            <input
              type="checkbox"
              checked={this.state.flag}
              onChange={() => {
                this.setState({
                  flag: !this.state.flag
                });
              }}
            />
            <span>已选 {shopcarList.length} 件</span>
          </li>
          <li>
            合计：￥<span>4900</span>
          </li>
          <li>
            <Button type="primary" size="small">
              现在结算
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

class Shopcar extends Component {
  render() {
    let { shopcarList, handleDetail } = this.props;
    if (shopcarList.length > 0) {
      return (
        <div className="shopcar">
          <NavBar
            style={{
              fontSize: '18px',
              color: '#fff',
              background: 'black',
              height: '50px'
            }}
            className="not-top"
          >
            购物车
          </NavBar>
          <Hasshop shopcarList={shopcarList} handleDetail={handleDetail} />
          <Tabbar />
        </div>
      );
    } else {
      return (
        <div className="shopcar">
          <NavBar
            style={{
              fontSize: '18px',
              color: '#fff',
              background: 'black',
              height: '50px'
            }}
            className="not-top"
          >
            购物车
          </NavBar>
          <Notshop />
          <Tabbar />
        </div>
      );
    }
  }
  componentDidMount() {
    document.title = '我的购物车';
  }
}

export default connect(
  state => {
    return {
      shopcarList: state.detail.shopcarList
    };
  },
  dispatch => {
    return {
      handleDetail(item) {
        window.sessionStorage.setItem('detailList', JSON.stringify(item));
        dispatch(GetDetailList(item));
      }
    };
  }
)(Shopcar);
