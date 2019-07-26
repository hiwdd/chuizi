import React, { Component } from 'react';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { connect } from 'react-redux';
import Product from '../../components/Product/index';
import Details from '../../components/Details/index';
import Params from '../../components/Params/index';
import Recommend from '../../components/Recommend/index';
import DetailTabbar from '../../components/DetailTabbar/index';
import './index.scss';

const tabs = [
  { title: '商品' },
  { title: '详情' },
  { title: '参数' },
  { title: '推荐' }
];

class Detail extends Component {
  render() {
    let { detailList } = this.props;
    let shopInfo = detailList;
    return (
      <div className="detail">
        <NavBar
          className="det-top"
          icon={
            <Icon
              type="left"
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          }
          style={{ fontSize: '18px', color: '#fff', background: 'black' }}
        >
          详情页
        </NavBar>
        <div className="det-center">
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <Product shopInfo={shopInfo} />
            <Details shopInfo={shopInfo} />
            <Params shopInfo={shopInfo} />
            <Recommend shopInfo={shopInfo} />
          </Tabs>
        </div>
        <DetailTabbar />
      </div>
    );
  }
  componentDidMount() {
    document.title = '商品详情';
  }
}

export default connect(
  state => {
    return {
      detailList: state.detail.detailList
    };
  },
  null
)(Detail);
