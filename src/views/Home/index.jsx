import React from 'react';
import Tabbar from '../../components/Tabbar/index';
import Header from '../../components/header/header';
import BannerList from '../../components/Home/BannerList/index';
import Hot from '../../components/Home/Hot/index';
import Clothes from '../../components/Home/Clothes/index';
import Breath from '../../components/Home/Breath/index';
import Parts from '../../components/Home/Parts/index';
import Nut from '../../components/Home/Nut/index';
import store from '../../store';
import { GetHomeList } from '../../store/modules/home/actionCreator';
import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Header name="首页" />
        <div className="main-scroll">
          <BannerList />
          <Hot />
          <Clothes />
          <Breath />
          <Parts />
          <Nut />
        </div>
        <Tabbar />
      </div>
    );
  }
  componentDidMount() {
    document.title = '【锤子商城】坚果手机-坚果R1手机-坚果3手机';
    store.dispatch(GetHomeList);
  }
}

export default Home;
