import React from "react";
import { Icon } from "antd-mobile";
import { Form,Input } from 'antd';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'
import './index.scss'


class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login_header">
          <p>登录官网</p>
        </div>
        <div className='login_body'>
          <Form>
            <Form.Item>
            <Input  placeholder="手机号/邮箱"  />
            </Form.Item>
            <Form.Item>
            <Input className='psw'  placeholder="密码"/>
            </Form.Item>
            <Form.Item className='remember'>
              <div className='che'>
                <b>√</b>
                <span>自动登陆</span>
              </div> 
              <NavLink className="login-form-forgot" to="/">
                忘记密码
              </NavLink>
              <NavLink className="login-form-forgot" to="/register">
                注册
              </NavLink>
            </Form.Item>
            <Form.Item>
            <button>
              登录
            </button>
            <NavLink className="login-form-forgot" to="/">
                国际手机号登陆
              <Icon type="right" />
            </NavLink>
            </Form.Item>
          </Form>
        </div>
        <div className='login_food'>
          <NavLink to='/'>VB</NavLink>
          <NavLink to='/'>QQ</NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
