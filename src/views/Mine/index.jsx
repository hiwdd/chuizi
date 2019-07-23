import React from 'react';

class Mine extends React.Component {
  render() {
    return (
      <div>
        <h1>Mine</h1>
      </div>
    );
  }
  componentDidMount() {
    document.title = '个人中心';
  }
}

export default Mine;
