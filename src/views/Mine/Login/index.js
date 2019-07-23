import React from "react";
// import { Icon } from "antd-mobile";
import { InputItem } from 'antd-mobile';
import './index.scss'


class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login_header">
          <p>登陆官网</p>
        </div>
        <div className='login_body'>
          <InputItem  />
          <InputItem  />
        </div>
      </div>
    );
  }
}

export default Login;
