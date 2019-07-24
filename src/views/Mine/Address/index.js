import React from "react";
import { Icon } from 'antd-mobile'
import "./index.scss";


class Address extends React.Component {
  render() {
    return (
      <div className="ress">
        <div className="ress_header">
           <span><Icon type='left' />返回</span> 
          <p>地址列表</p>
        </div>
        <div className="ress_body">
          <button className='register'>添加新地址</button>
        </div>
      </div>
    );
  }
}

export default Address;
