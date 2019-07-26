import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetDetailList } from '../../../store/modules/detail/actionCreator';

class Clothes extends React.Component {
  render() {
    let { fsxb } = this.props;
    return (
      <div className="clothes">
        <div className="clothes-more">
          <p>服饰箱包</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="clothes-ul">
          {fsxb.map(item => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                onClick={() => {
                  this.props.handleDetail(item);
                }}
              >
                <li className="clothes-li">
                  <img alt="" src={item.shop_info.ali_image} />

                  <div className="clothes-detail">
                    <h5>{item.shop_info.title}</h5>
                    <p>{item.shop_info.sub_title}</p>
                    <ul className="clothes-color">
                      <li className="colores" />
                      <li className="colores" />
                      <li className="colores" />
                    </ul>
                    <div className="clothes-price">
                      <p>¥</p>
                      <p>{item.price}</p>
                    </div>
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
)(Clothes);
