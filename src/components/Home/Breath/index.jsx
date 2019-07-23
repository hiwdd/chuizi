import React from 'react';
import { Icon } from 'antd';
import './index.scss';

class Breath extends React.Component {
  render() {
    return (
      <div className="breath">
        <div className="breath-more">
          <p>畅呼吸</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="breath-ul">
          <li className="breath-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png?x-oss-process=image/resize,w_513/format,webp"/></a>
            <div className="breath-introduce">
              <h4>畅呼吸智能空气净化器 · 标准版</h4>
              <p>超强净化能力、超低噪音、超长寿命</p>
              <span className="breath-price">
                <p>¥</p>
                <p>2,799.00</p>
              </span>
            </div>
          </li>

          <li className="breath-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_513/format,webp"/></a>
            <div className="breath-introduce">
              <h4>畅呼吸智能空气净化器 · 超级除甲醛版</h4>
              <p>超强除甲醛能力，超低噪音，智能操控</p>
              <span className="breath-price">
                <p>¥</p>
                <p>2,999.00</p>
              </span>
            </div>
          </li>
          
          <li className="breath-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/00eee903962f17d75950397843117e6e.jpg?x-oss-process=image/resize,w_513/format,webp"/></a>
            <div className="breath-introduce">
              <h4>畅呼吸除霾除甲醛高效复合滤芯</h4>
              <p>精选双层防护材质、过滤更精细、去味更有效</p>
              <span className="breath-price">
                <p>¥</p>
                <p>699.00</p>
              </span>
            </div>
          </li>

          <li className="breath-li">
            <a href=""><img alt="" src="https://resource.smartisan.com/resource/4d83d72c5ecc288e8d5ddd9d06b80f99.jpg?x-oss-process=image/resize,w_513/format,webp"/></a>
            <div className="breath-introduce">
              <h4>畅呼吸除甲醛超级活性炭滤芯</h4>
              <p>家装等场景适用的专业除甲醛超级活性炭滤芯</p>
              <span className="breath-price">
                <p>¥</p>
                <p>599.00</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Breath;
