import React from "react";
import "./mine-user.scss";
import { Icon } from "antd-mobile";
import { NavLink } from "react-router-dom";


class User extends React.Component {
  render() {
    return (
      <div className="user">
        <div className="user_header">
          <p>个人中心</p>
        </div>
        <div className="user_body">
          <NavLink to= '/'>
            <div className="user_body_my">
              <div className="user_image">
                <img
                  src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png"
                  alt="头像"
                />
              </div>
              <p>
                登陆/注册
                <Icon type="right" />
              </p>
            </div>
          </NavLink>
          <ul className="ul_list">
            <li className='li'>
              <NavLink to= '/'>
                <i>
                  <Icon type="loading" />
                </i>
                <p>全部订单</p>
              </NavLink>
            </li>
            <li className='li'>
              <NavLink to= '/'>
                <i>
                  <Icon type="loading" />
                </i>
                <p>待付款</p>
              </NavLink>
            </li>
            <li className='li'>
              <NavLink to= '/'>
                <i>
                  <Icon type="loading" />
                </i>
                <p>待收货</p>
              </NavLink>
            </li>
            <li>
              <NavLink to= '/'>
                <i>
                  <Icon type="loading" />
                </i>
                <p>售后</p>
              </NavLink>
            </li>
          </ul>
          <ol>
            <li className='bottom'>
              <NavLink to= '/'>
                地址管理 <Icon type="right" />
              </NavLink>
            </li>
            <li>
              <NavLink to= '/'>
                我的优惠券 <Icon type="right" />
              </NavLink>
            </li>
            <li className='bottom'>
              <NavLink to= '/'>
                优先购买卡 <Icon type="right" />
              </NavLink>
            </li>
            <li className='bottom'>
              <NavLink to= '/'>
                提货兑换卡 <Icon type="right" />
              </NavLink>
            </li>
          </ol>
          <ol>
            <li className='bottom'>
              <NavLink to= '/'>
                常见问题 <Icon type="right" />
              </NavLink>
            </li>
            <li>
              <NavLink to= '/'>
                服务支持 <Icon type="right" />
              </NavLink>
            </li>
          </ol>
          <ol>
            <li>
              <NavLink to= '/'>
                意外碎屏保修服务 <Icon type="right" />
              </NavLink>
            </li>
            <li>
              <NavLink to= '/'>
                延长保修服务 <Icon type="right" />
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default User;
