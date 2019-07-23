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
}

export default Home;
