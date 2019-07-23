import React, { Component } from 'react';
import { Icon } from 'antd';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './index.scss';

class DetailTabbar extends Component {
  render() {
    return (
      <div className="dt">
        <Link className="btn btn2" to="/shopcar">
          <Icon type="folder-add" style={{ fontSize: '26px' }} />
        </Link>
        <Button className="btn btn1" type="ghost" inline={true}>
          加入购物车
        </Button>
        <Button className="btn btn1" type="primary" inline={true}>
          现在购买
        </Button>
      </div>
    );
  }
}

export default DetailTabbar;
