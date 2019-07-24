import React from 'react';
import { Icon } from 'antd-mobile';
import { Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoginUser } from '../../../store/modules/mine/actionCreator';
import 'antd/dist/antd.css';
import './index.scss';
// import Router from '../mine-router'

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleLogin(values, this.props.history);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_header">
          <p>登录官网</p>
        </div>
        <div className="login_body">
          <Form>
            <Form.Item>
              {getFieldDecorator('userinfo', {
                rules: [{ required: true, message: '请输入手机号或邮箱!' }]
              })(<Input placeholder="手机号/邮箱" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(<Input type="password" className="psw" placeholder="密码" />)}
            </Form.Item>
            <Form.Item className="remember">
              <div className="che">
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
              <button onClick={this.handleSubmit}>登录</button>
              <NavLink className="login-form-forgot" to="/">
                国际手机号注册
                <Icon type="right" />
              </NavLink>
            </Form.Item>
          </Form>
        </div>
        <div className="login_food">
          <NavLink to="/">VB</NavLink>
          <NavLink to="/">QQ</NavLink>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      handleLogin(values, historys) {
        dispatch(getLoginUser(values, historys));
      }
    };
  }
)(Form.create(null)(Login));
