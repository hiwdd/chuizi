import React from 'react';
import {Icon} from 'antd';
import './index.scss';

class Classify extends React.Component {
  render() {
    return (
      <div className="classify">
      {/* 头部导航栏 */}
       <div className="header">
         <a href="#" className="nav-menu"><Icon type="menu" /></a>
         <span>分类</span>
         <a href="#" className="nav-search"><Icon type="search"/></a>
       </div>
      {/* 手机div */}
       <div className="phone">
          <p>手机</p>
          <div className="phone-log">
            <img src="https://resource.smartisan.com/resource/b1d887c9246cee3a8ba7a7a7c57d5a50.png?x-oss-process=image/resize,w_499/format,webp"/>
          </div>
          <a href="#"> 
            <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_63/format,webp"/>
            <span>坚果Pro2S</span>
          
          </a>
          <a href="#">
            <img src="https://resource.smartisan.com/resource/17f254e6f809355d8fe66260ccb48fb0.png?x-oss-process=image/resize,w_63/format,webp"/>
            <span>坚果R1</span>
           
          </a>
        </div>

        {/* 手机配件div */}
        <div className="mobilephone">
          <p>手机配件</p>
          <div className="log-mobile">
            <img src="https://resource.smartisan.com/resource/092ccb4ad40c623954fddef7e2ad44d6.png?x-oss-process=image/resize,w_660/format,webp"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Classify;
