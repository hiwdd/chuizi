import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetRegisterUser } from '../../../store/modules/mine/actionCreator';
import 'antd/dist/antd.css';
import './index.scss';

const { Option } = Select;

class Register extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && values.agreement) {
        let obj = {};
        obj.userinfo = values.userinfo;
        obj.password = values.password;
        this.props.handleRegister(obj, this.props.history);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_header">
          <p>注册 Smartisan ID</p>
        </div>
        <div className="login_body">
          <Form>
            <Form.Item className="position">
              <Input className="pos" value="国家和地区" />
              <Select defaultValue="中国">
                <Option value="中国">中国</Option>
                <Option value="外国">外国</Option>
              </Select>
            </Form.Item>
            <Form.Item className="phon">
              {getFieldDecorator('userinfo', {
                rules: [{ required: true, message: '请输入你的手机号' }]
              })(<Input className="psw" placeholder="手机号" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(<Input placeholder="密码" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked'
              })(
                <Checkbox className="che">
                  <span>
                    我已阅读并同意遵守
                    <NavLink to="/other">法律声明</NavLink>
                    <NavLink to="/other">隐私条款</NavLink>
                  </span>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item>
              <button onClick={this.handleSubmit} className="register">
                注册
              </button>
            </Form.Item>
          </Form>
          <NavLink className="login" to="/login">
            如果您已拥有 Smartisan ID，则可在此<span>登录</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      userInfo: state.mine.userInfo
    };
  },
  dispatch => {
    return {
      handleRegister(values, history) {
        dispatch(SetRegisterUser(values, history));
      }
    };
  }
)(Form.create(null)(Register));
