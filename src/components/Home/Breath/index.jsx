import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetDetailList } from '../../../store/modules/detail/actionCreator';

class Breath extends React.Component {
  render() {
    let { chx } = this.props;
    return (
      <div className="breath">
        <div className="breath-more">
          <p>畅呼吸</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="breath-ul">
          {chx.map(item => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                onClick={() => {
                  this.props.handleDetail(item);
                }}
              >
                <li className="breath-li">
                  <img alt="" src={item.shop_info.ali_image} />
                  <div className="breath-introduce">
                    <h4>{item.shop_info.title}</h4>
                    <p>{item.shop_info.sub_title}</p>
                    <span className="breath-price">
                      <p>¥</p>
                      <p>{item.price}</p>
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      handleDetail(item) {
        window.sessionStorage.setItem('detailList', JSON.stringify(item));
        dispatch(GetDetailList(item));
      }
    };
  }
)(Breath);
