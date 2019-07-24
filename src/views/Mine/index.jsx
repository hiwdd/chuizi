import React from 'react';
import User from './mine-user';
import Tabbar from '../../components/Tabbar/index';

class Mine extends React.Component {
  render() {
    return (
      <div>
        <User />
        <Tabbar />
      </div>
    );
  }
  componentDidMount() {
    document.title = '个人中心';
  }
}

export default Mine;
