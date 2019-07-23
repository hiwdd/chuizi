import React from 'react';
import { Icon } from 'antd';
import './index.scss';


class Menu extends React.Component {
  render() {
    return (
      <div className="topbar">
        <Icon type="menu" className="menu" />
        <Icon type="search" className="search" />
      </div>
    )
  }
}

export default Menu;
