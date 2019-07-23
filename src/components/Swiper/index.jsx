//轮播图组件

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import baseSwiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.scss';

export default class Swiper extends React.Component {
  render() {
    let { slide, pagination, navigation, scrollbar } = this.props;
    let className = `swiper-container ${this.props.className}`;
    if (slide.length > 0) {
      return (
        <div className={className}>
          <div className="swiper-wrapper">
            {slide.map((item, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <img src={item} alt="img" />
                </div>
              );
            })}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          {pagination && <div className="swiper-pagination" />}

          {/* <!-- 如果需要导航按钮 --> */}
          {navigation && (
            <Fragment>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </Fragment>
          )}

          {/* <!-- 如果需要滚动条 --> */}
          {scrollbar && <div className="swiper-scrollbar" />}
        </div>
      );
    } else {
      return null;
    }
  }
  initSwiper() {
    this.mySwiper = new baseSwiper('.swiper-container', {
      loop: this.props.loop,
      autoplay: this.props.autoplay,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }
  componentDidMount() {
    this.initSwiper();
  }
}
Swiper.propTypes = {
  loop: PropTypes.bool,
  pagination: PropTypes.bool,
  navigation: PropTypes.bool,
  scrollbar: PropTypes.bool,
  autoplay: PropTypes.object
};
Swiper.defaultProps = {
  loop: true,
  pagination: true,
  navigation: false,
  scrollbar: false,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  }
};
