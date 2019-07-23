//详情页里的商品详情

import React, { Component } from 'react';
import './index.scss';

class Details extends Component {
  render() {
    return (
      <div className="det-xq">
        <h2>商品详情</h2>
        <img
          src="https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp"
          alt=""
        />
        <img
          src="https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_1/format,webp"
          alt=""
        />
      </div>
    );
  }
}
export default Details;
