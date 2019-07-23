import React from "react";
import { Form, Input,Select } from "antd";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";

const { Option } = Select;

class Register extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login_header">
          <p>注册 Smartisan ID</p>
        </div>
        <div className="login_body">
          <Form>
            <Form.Item className='position'>            
              <Input className='pos' value="国家和地区"/ >
              <Select>
                <Option value="中国">中国</Option>
                <Option value="外国">外国</Option>
              </Select>
            </Form.Item>  
            <Form.Item className='phon'>
              <div>+86</div>
              <Input className="psw" placeholder="手机号" />
            </Form.Item>
            <Form.Item className='regter_reg'>
              <Input  placeholder="验证码" />
              <button>获取验证码</button>
            </Form.Item>
            <Form.Item>
               <Input placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="重复密码" />
            </Form.Item>
            <Form.Item className="remember">
              <div className="che">
                <b className='ches' to="">√</b>
                <span>我已阅读并同意遵守</span>
                 <NavLink to="/other">法律声明</NavLink>
                 和
                 <NavLink to="/other">隐私条款</NavLink>
              </div>
            </Form.Item>
            <Form.Item>
              <button className='register'>注册</button>
            </Form.Item>
          </Form>
          <NavLink className='login' to="/login">如果您已拥有 Smartisan ID，则可在此<span>登录</span></NavLink>
        </div>
      </div>
    );
  }
}

export default Register;
