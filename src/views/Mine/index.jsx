import React from 'react';
import User from './mine-user'

class Mine extends React.Component {
  render() {
    return (
      <div>
        <User/>
      </div>
    );
  }
  componentDidMount() {
    document.title = '个人中心';
  }
}

export default Mine;
