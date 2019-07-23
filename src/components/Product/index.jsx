//详情页里的商品页

import React, { Component } from 'react';
import Swiper from '../Swiper/index';
import './index.scss';

class Product extends Component {
  state = {
    bannerList: [
      'https://resource.smartisan.com/resource/578116bddf1d170c89e9af7ba5073fb6.jpg?x-oss-process=image/format,webp',
      'https://resource.smartisan.com/resource/ebb01298315bf2ebdb6b21ee2c8e4237.jpg?x-oss-process=image/format,webp',
      'https://resource.smartisan.com/resource/ebb01298315bf2ebdb6b21ee2c8e4237.jpg?x-oss-process=image/format,webp'
    ]
  };
  render() {
    return (
      <div className="det-sp">
        <Swiper
          className="box"
          autoplay={{ delay: 10000 }}
          slide={this.state.bannerList}
        />
        <div className="det-sp-cont">
          <div className="cont-top">
            <h4>Smartisan 帆布鞋</h4>
            <p>一双踏实、舒适的帆布鞋</p>
            <div className="cont-price">
              <div className="disc-price">
                <i>￥</i>
                <span>149.00</span>
              </div>
              <div className="orig-price">
                <i>￥</i>
                <span>199.00</span>
              </div>
            </div>
            <div className="cont-actv">
              <span>优惠信息</span>
              <div className="cont-drop">
                <span>直降</span>
                <i>直降50元</i>
              </div>
            </div>
          </div>
          <div className="cont-bot">
            <h6>已选版本</h6>
            <p>
              颜色：<span>黑色</span>
            </p>
            <p>
              尺码：<span>35</span>
            </p>
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
