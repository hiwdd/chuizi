import React from 'react';
import { connect } from 'react-redux';
import Tabbar from '../../components/Tabbar/index';
import Header from '../../components/header/header';
import { GetImageData } from '../../store/modules/classify/actionCreator';
import './index.scss';

class Classify extends React.Component {
  render() {
    let { imageList } = this.props;
    return (
      <div className="classify">
        <Header />
        {/* 手机div */}
        <div className="wrap-pho">
          <div className="phone">
            <p>{imageList[0] && imageList[0].name}</p>
            <div className="phone-log">
              <img src={imageList[0] && imageList[0].image.src} />
            </div>
            <a href="#">
              <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_63/format,webp" />
              <span>坚果Pro2S</span>
            </a>
            <a href="#">
              <img src="https://resource.smartisan.com/resource/17f254e6f809355d8fe66260ccb48fb0.png?x-oss-process=image/resize,w_63/format,webp" />
              <span>坚果R1</span>
            </a>
          </div>

          {/* 手机配件div */}
          <div className="mobilephone">
            <p>{imageList[1] && imageList[1].name}</p>
            <div className="log-mobile">
              <img src={imageList[1] && imageList[1].image.src} />
            </div>
            <ul className="list">
              <li>
                <img src="https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>Smartisan 双口 & 快充车载充电器</span>
              </li>
              <li>
                <img src="https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>坚果“电池形电池”移动电源</span>
              </li>
              <li>
                <img src="https://resource.smartisan.com/resource/ce632bd67465027861707ec221b37c2d.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>Smartisan 半入耳式耳机</span>
              </li>
              <li>
                <img src="https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>坚果砖式蓝牙小音箱</span>
              </li>
              <li>
                <img src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>Smartisan 原装快充充电器 18W</span>
              </li>
              <li>
                <img src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_210/format,webp" />
                <span>坚果彩虹数据线</span>
              </li>
            </ul>
          </div>
          {/* 畅呼吸 */}
          <div className="breath">
            <p>{imageList[3] && imageList[3].name}</p>
            <div className="log-breath">
              <img src={imageList[3] && imageList[3].image.src} />
            </div>
            <ul>
              <li>
                <a href="">
                  <img src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_125/format,webp" />
                  <span>畅呼吸智能空气净化器 · 超级除甲醛版</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png?x-oss-process=image/resize,w_125/format,webp" />
                  <span>畅呼吸智能空气净化器 · 标准版</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://resource.smartisan.com/resource/4d83d72c5ecc288e8d5ddd9d06b80f99.jpg?x-oss-process=image/resize,w_125/format,webp" />
                  <span>畅呼吸除甲醛超级活性炭滤芯</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://resource.smartisan.com/resource/00eee903962f17d75950397843117e6e.jpg?x-oss-process=image/resize,w_125/format,webp" />
                  <span>畅呼吸除霾除甲醛高效复合滤芯</span>
                </a>
              </li>
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
  }
}

export default connect(
  state => {
    return {
      imageList: state.classify.imageList
    };
  },
  dispatch => {
    return {
      handleGetImg() {
        dispatch(GetImageData);
      }
    };
  }
)(Classify);
