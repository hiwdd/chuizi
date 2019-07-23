import React from "react";
import { Icon } from 'antd-mobile'
import "./index.scss";


class Coupon extends React.Component {
  render() {
    return (
      <div className="ress">
        <div className="ress_header">
          <span><Icon type='left' />返回</span> 
          <p>路过。。。</p>
        </div>
        <div className="ress_body">
          <p>您目前还没有路过的钱</p>
        </div>
      </div>
    );
  }
}

export default Coupon;
