import React from 'react';
import {Icon} from 'antd';
import'./index.scss';
class NotFound extends React.Component {
  render() {
    return (
      <div className="warn">
        <Icon 
           type="exclamation-circle" style={{fontSize:"50px",color:"#cfcfcf"}}/>
        <h1>对不起，你找的页面丢失了！</h1>
      </div>
    );
  }
}

export default NotFound;
