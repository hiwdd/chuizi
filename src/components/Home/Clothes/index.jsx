import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';

class Clothes extends React.Component {
  render() {
    return (
      <div className="clothes">
        <div className="clothes-more">
          <p>服饰箱包</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="clothes-ul">
          <li className="clothes-li">
            <Link to="#"><img alt="" src="https://resource.smartisan.com/resource/fc092e830c0420b5d8db2871fec82b35.png?x-oss-process=image/resize,w_405/format,webp" /></Link>

            <div className="clothes-detail">
              <h5>地平线 8 号旅行箱</h5>
              <p>简约设计、德国拜耳 PC 箱体</p>
              <ul className="clothes-color">
                <li className="colores"></li>
                <li className="colores"></li>
                <li className="colores"></li>
              </ul>
              <div className="clothes-price">
                <p>¥</p>
                <p>149.00</p>
              </div>
            </div>
          </li>

          <li className="clothes-li">
            <Link to="#"><img alt="" src="https://resource.smartisan.com/resource/d1dcca9144e8d13ffb33026148599d0a.png?x-oss-process=image/resize,w_405/format,webp" /></Link>

            <div className="clothes-detail">
              <h5>地平线 8 号商务旅行箱</h5>
              <p>为了野心和远方</p>
              <ul className="clothes-color">
                <li className="colores"></li>
                <li className="colores"></li>
                <li className="colores"></li>
              </ul>
              <div className="clothes-price">
                <p>¥</p>
                <p>999.00</p>
              </div>
            </div>
          </li>

          <li className="clothes-li">
            <Link to="#"><img alt="" src="https://resource.smartisan.com/resource/d9586f7c5bb4578e3128de77a13e4d85.png?x-oss-process=image/resize,w_405/format,webp" /></Link>

            <div className="clothes-detail">
              <h5>Smartisan T恤 皇帝的新装</h5>
              <p></p>
              <ul className="clothes-color">
                <li className="colores"></li>
                <li className="colores"></li>
                <li className="colores"></li>
              </ul>
              <div className="clothes-price">
                <p>¥</p>
                <p>119.00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Clothes;
