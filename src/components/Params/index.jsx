// 详情页的参数页

import React, { Component } from 'react';
import './index.scss';

class Params extends Component {
  render() {
    let { shopInfo } = this.props;
    let fuwu = shopInfo.shop_info.buy_notes;
    let jscs = shopInfo.shop_info.tpl_content.base.attributes[0].list;
    return (
      <div className="det-cs">
        <div className="det-pra">
          <h2>技术参数</h2>
          <ul className="det-ul">
            {jscs.map((item, index) => {
              return (
                <li key={index}>
                  <h4>{item.name}</h4>
                  <span>{item.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="det-ams">
          <h2>服务说明</h2>
          <ul className="ams-ul">
            {fuwu.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Params;
