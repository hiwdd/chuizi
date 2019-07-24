import React from 'react';
import Menu from '../../components/Home/Menu/index';
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
  componentDidMount() {
    document.title = '【锤子商城】坚果手机-坚果R1手机-坚果3手机';
    store.dispatch(GetHomeList);
  }
}

export default Home;
