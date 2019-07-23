import React from 'react';
import Menu from '../../components/Home/Menu/index';
import BannerList from '../../components/Home/BannerList/index';
import Hot from '../../components/Home/Hot/index';
import Clothes from '../../components/Home/Clothes/index';
import Breath from '../../components/Home/Breath/index';
import Parts from '../../components/Home/Parts/index';
import Nut from '../../components/Home/Nut/index';
import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="main-scroll">
          <BannerList />
          <Hot />
          <Clothes />
          <Breath />
          <Parts />
          <Nut />
        </div>
      </div>
    );
  }
  getDateList() {
    fetch('/api/marketing/mobile/index_05b1e38510df1d26a19396c32b4a4e80.json')
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
