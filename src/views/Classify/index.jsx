import React from 'react';
import { connect } from 'react-redux';
import Tabbar from '../../components/Tabbar/index';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import {
  GetImageData,
  GetClassifyData
} from '../../store/modules/classify/actionCreator';
import { GetDetailList } from '../../store/modules/detail/actionCreator';
import './index.scss';

class Classify extends React.Component {
  render() {
    let { imageList, classifyList } = this.props;
    let chx = classifyList.filter(item => {
      return item.name.indexOf('畅呼吸') !== -1;
    });
    let sjpj = classifyList.filter(item => {
      return item.name.indexOf('畅呼吸') === -1;
    });
    // console.log(chx, sjpj);
    return (
      <div className="classify">
        <Header name="分类" />
        {/* 手机div */}
        <div className="wrap-pho">
          <div className="phone">
            <p>{imageList[0] && imageList[0].name}</p>
            <div className="phone-log">
              <img src={imageList[0] && imageList[0].image.src} alt="" />
            </div>
            <Link to="/">
              <img
                src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_63/format,webp"
                alt=""
              />
              <span>坚果Pro2S</span>
            </Link>
            <Link to="/">
              <img
                src="https://resource.smartisan.com/resource/17f254e6f809355d8fe66260ccb48fb0.png?x-oss-process=image/resize,w_63/format,webp"
                alt=""
              />
              <span>坚果R1</span>
            </Link>
          </div>

          {/* 手机配件div */}
          <div className="mobilephone">
            <p>{imageList[1] && imageList[1].name}</p>
            <div className="log-mobile">
              <img src={imageList[1] && imageList[1].image.src} alt="" />
            </div>
            <ul className="list">
              {sjpj.map(item => {
                return (
                  <li key={item.id}>
                    <Link
                      to={`/detail/${item.id}`}
                      onClick={() => {
                        this.props.handleDetail(item);
                      }}
                    >
                      <img src={item.shop_info.ali_image} alt="" />
                    </Link>
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* 畅呼吸 */}
          <div className="breath">
            <p>{imageList[3] && imageList[3].name}</p>
            <div className="log-breath">
              <img src={imageList[3] && imageList[3].image.src} alt="" />
            </div>
            <ul>
              {chx.map(item => {
                return (
                  <li key={item.id}>
                    <Link
                      to={`/detail/${item.id}`}
                      onClick={() => {
                        this.props.handleDetail(item);
                      }}
                    >
                      <img src={item.shop_info.ali_image} alt="" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Tabbar />
      </div>
    );
  }
  componentDidMount() {
    document.title = '分类';
    this.props.handleGetImg();
    this.props.handleGetClassify();
  }
}

export default connect(
  state => {
    return {
      imageList: state.classify.imageList,
      classifyList: state.classify.classifyList
    };
  },
  dispatch => {
    return {
      handleGetImg() {
        dispatch(GetImageData);
      },
      handleGetClassify() {
        dispatch(GetClassifyData);
      },
      handleDetail(item) {
        window.sessionStorage.setItem('detailList', JSON.stringify(item));
        dispatch(GetDetailList(item));
      }
    };
  }
)(Classify);
