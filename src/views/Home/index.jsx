import React from 'react';
import { connect } from 'react-redux';
import { GetHomeData } from '../../store/modules/home/actionCreator';
import Tabbar from '../../components/Tabbar/index';
import Header from '../../components/header/header';
import BannerList from '../../components/Home/BannerList/index';
import Hot from '../../components/Home/Hot/index';
import Clothes from '../../components/Home/Clothes/index';
import Breath from '../../components/Home/Breath/index';
import Parts from '../../components/Home/Parts/index';
import Nut from '../../components/Home/Nut/index';
import './index.scss';

class Home extends React.Component {
  render() {
    let { homeData } = this.props;
    let rxsp = homeData.slice(0, 9);
    let fsxb = homeData.slice(9, 14);
    let chx = homeData.slice(15, 19);
    let sjpj = homeData.slice(18, 24);
    let jgxl = homeData.slice(24, homeData.length);
    return (
      <div className="main">
        <Header name="首页" />
        <div className="main-scroll">
          <BannerList />
          <Hot rxsp={rxsp} />
          <Clothes fsxb={fsxb} />
          <Breath chx={chx} />
          <Parts sjpj={sjpj} />
          <Nut jgxl={jgxl} />
        </div>
        <Tabbar />
      </div>
    );
  }
  componentDidMount() {
    document.title = '【锤子商城】坚果手机-坚果R1手机-坚果3手机';
    this.props.handleHomeData();
  }
}

export default connect(
  state => {
    return {
      homeData: state.home.homeData
    };
  },
  dispatch => {
    return {
      handleHomeData() {
        dispatch(GetHomeData);
      }
    };
  }
)(Home);
