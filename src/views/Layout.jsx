import React from 'react';
import Tabbar from '../components/Tabbar/index';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="lay-child">{this.props.children}</div>
        <Tabbar />
      </div>
    );
  }
}

export default Layout;
