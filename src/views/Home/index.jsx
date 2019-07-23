import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
  getDateList() {
    fetch('/api/marketing/mobile/index_05b1e38510df1d26a19396c32b4a4e80.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
      });
  }
  componentDidMount() {
    document.title = '【锤子商城】坚果手机-坚果R1手机-坚果3手机';
    this.getDateList();
  }
}

export default Home;
