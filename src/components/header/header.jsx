import React from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import './header.scss';

const Header = props => {
  return (
    <div className="header">
      <Icon type="menu" className="navMenu" onClick={() => {
        props.history.push('/menu')
      }} />
      <span>{props.name}</span>

      <Icon
        type="search"
        className="navSreach"
        onClick={() => {
          props.history.push('/search');
        }}
      />
    </div>
  );
};

export default withRouter(Header);
