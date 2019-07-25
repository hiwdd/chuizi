import { MenuBar } from 'antd-mobile';
import React from 'react';
import {Icon} from 'antd';
import './menu.scss';

class Menu extends React.Component{
  render(){
    return(
      <div>
        <MenuBar
          ref={ref => (this.autoFocusInst = ref)}
        />
        <ul>
          <li>
            <a href="#">
              <Icon type="shopping" />
              <span>锤子商城</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="mobile" />
              <span>坚果 Pro 2S</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="tablet" />
              <span>坚果 R1</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="desktop" />
              <span>坚果 TNT 工作站</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="mobile" />
              <span>坚果 3</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="shopping" />
              <span>Smartisan OS</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="vertical-align-bottom" />
              <span>应用</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="audit" />
              <span>论坛</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Icon type="customer-service" />
              <span>服务支持</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;
