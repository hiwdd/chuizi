// 基于 swiper 的 Swiper 组件
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseSwiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.scss';

class Swiper extends React.Component {
  render() {
    let { pagination, navigation, slide } = this.props;

    let className = `swiper-container ${this.props.className}`;

    if (slide.length > 0) {
      return (
        <div className={className} style={this.props.style}>
          <div className="swiper-wrapper">
            {slide.map((item, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <img src={item} alt="" />
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
        </div>
      );
    } else {
      return null;
    }
  }

  initSwiper() {
    this.mySiwper = new BaseSwiper('.swiper-container', {
      // 选项
      autoplay: this.props.autoplay,

      loop: this.props.loop,

      pagination: this.props.pagination
        ? {
            el: '.swiper-pagination'
          }
        : {},

      navigation: this.props.navigation
        ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        : {}
    });
  }
  componentDidMount() {
    if (this.mySiwper) {
      this.mySiwper.destroy();
    }
    this.initSwiper();
  }
}

// 设置 props 校验
Swiper.propTypes = {
  pagination: PropTypes.bool, // 分页器
  navigation: PropTypes.bool, // 上下页
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  slide: PropTypes.arrayOf(PropTypes.string).isRequired // ['']
};

// 设置 props 默认值
Swiper.defaultProps = {
  pagination: true,
  navigation: false,
  autoplay: false,
  loop: true
};

export default Swiper;
