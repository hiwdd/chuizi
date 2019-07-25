import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';

class Nut extends React.Component {
  render() {
    return (
      <div className="nut">
        <div className="nut-more">
          <p>坚果系列手机及配件</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="nut-ul">
          <li className="nut-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/2f2afca6f88e3aef5b1f332ea0c1d65a.png?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="nut-introduce">
              <h4>坚果 Pro 2S</h4>
              <p>双系统，无限屏</p>
              <span className="nut-price">
                <p>¥</p>
                <p>65.00</p>
              </span>
            </div>
          </li>

          <li className="nut-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="nut-introduce">
              <h4>坚果 Pro 2S</h4>
              <p>双系统，无限屏</p>
              <span className="nut-price">
                <p>¥</p>
                <p>65.00</p>
              </span>
            </div>
          </li>

          <li className="nut-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="nut-introduce">
              <h4>Smartisan 原装快充充电器 18W</h4>
              <p>18W 安全快充</p>
              <span className="nut-price">
                <p>¥</p>
                <p>45.00</p>
              </span>
            </div>
          </li>

          <li className="nut-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/8d8f9a1e239f8fcd2308776f49ba09f6.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="nut-introduce">
              <h4>坚果“电池形电池”移动电源</h4>
              <p>别具一格的“全能型”移动电源</p>
              <span className="nut-price">
                <p>¥</p>
                <p>68.00</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nut;
