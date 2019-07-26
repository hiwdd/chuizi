//详情页里的商品详情

import React, { Component } from 'react';
import './index.scss';

class Details extends Component {
  render() {
    let { shopInfo } = this.props;
    let img = shopInfo.shop_info.tpl_content.base.images.ali_mobile.url[0];
    return (
      <div className="det-xq">
        <h2>商品详情</h2>
        <img src={img} alt="" />
      </div>
    );
  }
}
export default Details;
