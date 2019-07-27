import React, { Component } from 'react';
import { Icon } from 'antd';
import { message } from 'antd';
import { Button } from 'antd-mobile';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetShopcarList } from '../../store/modules/detail/actionCreator';
import './index.scss';

class DetailTabbar extends Component {
  render() {
    let { detailList, history, handlAddShop } = this.props;
    return (
      <div className="dt">
        <Link className="btn btn2" to="/shopcar">
          <Icon type="car" style={{ fontSize: '26px' }} />
        </Link>
        <Button
          className="btn btn1"
          type="ghost"
          inline={true}
          onClick={() => {
            handlAddShop(detailList);
          }}
        >
          加入购物车
        </Button>
        <Button
          className="btn btn1"
          type="primary"
          inline={true}
          onClick={() => {
            history.push('/login');
          }}
        >
          现在购买
        </Button>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      detailList: state.detail.detailList
    };
  },
  dispatch => {
    return {
      handlAddShop(value) {
        message.success('加入成功', 1);
        dispatch(GetShopcarList(value));
      }
    };
  }
)(withRouter(DetailTabbar));
