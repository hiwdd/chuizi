import React from 'react';
import { Icon } from 'antd';
import './index.scss';


class Hot extends React.Component {
  render() {
    return (
      <div className="hot-goods">
        <div className="hot-goods-more">
          <p>热销商品</p>
          <Icon type="right" className="right" />
        </div>


        <ul className="hot-goods-ul">
          <li className="hot-goods-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/2f9a0f5f3dedf0ed813622003f1b287b.jpg?x-oss-process=image/resize,w_378/format,webp"/></a>
            <div className="introduce">
              <h4>Smartisan 帆布鞋</h4>
              <p>一双踏实、舒适的帆布鞋</p>
              <span className="price">
                <p>¥</p>
                <p>149.00</p>
              </span>
            </div>
          </li>
          <li className="hot-goods-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_378/format,webp"/></a>
            <div className="introduce">
              <h4>坚果 QuickCharge 4+ 快速充电器</h4>
              <p>全面兼容的 18W 快速充电</p>
              <span className="price">
                <p>¥</p>
                <p>58.00</p>
              </span>
            </div>
          </li>

          <li className="hot-goods-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/e9cd634b62470713f6b9c5a6065f4a10.jpg?x-oss-process=image/resize,w_378/format,webp"/></a>
            <div className="introduce">
              <h4>Smartisan T恤 毕加索</h4>
              <p></p>
              <span className="price">
                <p>¥</p>
                <p>149.00</p>
              </span>
            </div>
          </li>
          
          <li className="hot-goods-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/9bffe702b1f0aea221b1f18ddf886958.jpg?x-oss-process=image/resize,w_378/format,webp"/></a>
            <div className="introduce">
              <h4>各色DNA检测套装</h4>
              <p>千万级基因位点数据解读</p>
              <span className="price">
                <p>¥</p>
                <p>499.00</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Hot;
