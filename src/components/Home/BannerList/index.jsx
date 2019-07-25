import React from 'react';
import Swiper from '../../Swiper';
import { connect } from 'react-redux';
import { GetHomeList } from '../../../store/modules/home/actionCreator';

class BannerList extends React.Component {

  render() {
    let { homeList } = this.props;
    let bannerList = homeList.map(item => item.src);
    // console.log(bannerList);
    return (
      <div className="container">
        <ul className="container-ul">
          <li className="container-li">
            <Swiper className="box" slide={bannerList} autoplay={true} loop={true} />
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.getDateList();
  }
}

export default connect(
  state => {
    return {
      homeList: state.home.homeList
    }
  },
  dispatch => {
    return {
      getDateList() {
        dispatch(GetHomeList)
      }
    }
  }
)(BannerList)

