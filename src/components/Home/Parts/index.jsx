import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';

class Parts extends React.Component {
  render() {
    return (
      <div className="parts">
        <div className="parts-more">
          <p>官方配件</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="parts-ul">
          <li className="parts-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="parts-introduce">
              <h4>Smartisan 双口 & 快充车载充电器</h4>
              <p>铝合金机身、双口 & 快充、智能调节</p>
              <span className="parts-price">
                <p>¥</p>
                <p>65.00</p>
              </span>
            </div>
          </li>

          <li className="parts-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="parts-introduce">
              <h4>坚果“电池形电池”移动电源</h4>
              <p>别具一格的“全能型”移动电源</p>
              <span className="parts-price">
                <p>¥</p>
                <p>68.00</p>
              </span>
            </div>
          </li>

          <li className="parts-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/8a875418797690e26b665cc0d86dffc7.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="parts-introduce">
              <h4>Smartisan 半入耳式耳机</h4>
              <p>经典配色、专业调音、高品质麦克风</p>
              <span className="parts-price">
                <p>¥</p>
                <p>39.00</p>
              </span>
            </div>
          </li>

          <li className="parts-li">
            <Link to=""><img alt="" src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_513/format,webp" /></Link>
            <div className="parts-introduce">
              <h4>坚果彩虹数据线</h4>
              <p>七彩配色随机发货，为生活增添一份小小惊喜</p>
              <span className="parts-price">
                <p>¥</p>
                <p>19.00</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Parts;


