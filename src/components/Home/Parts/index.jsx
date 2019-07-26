import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetDetailList } from '../../../store/modules/detail/actionCreator';

class Parts extends React.Component {
  render() {
    let { sjpj } = this.props;
    return (
      <div className="parts">
        <div className="parts-more">
          <p>官方配件</p>
          <Icon type="right" className="right" />
        </div>

        <ul className="parts-ul">
          {sjpj.map(item => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                onClick={() => {
                  this.props.handleDetail(item);
                }}
              >
                <li className="parts-li">
                  <img alt="" src={item.shop_info.ali_image} />
                  <div className="parts-introduce">
                    <h4>{item.shop_info.title}</h4>
                    <p>{item.shop_info.sub_title}</p>
                    <span className="parts-price">
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
)(Parts);
