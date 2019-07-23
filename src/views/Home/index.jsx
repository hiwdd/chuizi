import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
  componentDidMount() {
    document.title = '【锤子商城】坚果手机-坚果R1手机-坚果3手机';
  }
}

export default Home;
