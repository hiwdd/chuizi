import React from "react";
import { Icon } from 'antd-mobile'
import "./index.scss";


class Coupon extends React.Component {
  render() {
    return (
      <div className="ress">
        <div className="ress_header">
          <span><Icon type='left' />返回</span> 
          <p>优惠卷</p>
        </div>
        <div className="ress_body">
          <img alt='兑换码' src="data:image/png;base64,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" />
          <p>您目前还没有优惠券</p>
        </div>
      </div>
    );
  }
}

export default Coupon;
