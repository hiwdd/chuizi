// 详情页的参数页

import React, { Component } from 'react';
import './index.scss';

class Params extends Component {
  render() {
    return (
      <div className="det-cs">
        <div className="det-pra">
          <h2>技术参数</h2>
          <ul className="det-ul">
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
            <li>
              <h4>帮面材料</h4>
              <span>100%棉</span>
            </li>
          </ul>
        </div>
        <div className="det-ams">
          <h2>服务说明</h2>
          <ul className="ams-ul">
            <li>7 天无理由退货</li>
            <li>15 天质量问题换货</li>
            <li>满 150 元免运费</li>
            <li>72 小时内发货</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Params;
