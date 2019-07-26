//详情页里的商品页

import React, { Component } from 'react';
import Swiper from '../Swiper/indexcopy';
import './index.scss';

class Product extends Component {
  render() {
    let { shopInfo } = this.props;
    return (
      <div className="det-sp">
        <Swiper className="box" slide={shopInfo.shop_info.ali_images} />
        <div className="det-sp-cont">
          <div className="cont-top">
            <h4>{shopInfo.shop_info.title}</h4>
            <p>{shopInfo.shop_info.sub_title}</p>
            <div className="cont-price">
              <div className="disc-price">
                <i>￥</i>
                <span>
                  {shopInfo.price > 20 ? shopInfo.price - 20 : shopInfo.price}
                </span>
              </div>
              <div className="orig-price">
                <i>￥</i>
                <span>{shopInfo.price}</span>
              </div>
            </div>
            <div className="cont-actv">
              <span>优惠信息</span>
              <div className="cont-drop">
                <span>直降</span>
                <i>直降20元</i>
              </div>
            </div>
          </div>
          <div className="cont-bot">
            <h6>已选数量</h6>
            <p>
              数量：<span>1</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
