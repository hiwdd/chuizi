import * as constants from './constants';
//动作生成文件
export const GetHomeBanner = value => {
  return {
    type: constants.GetHomeBanner,
    value
  };
};

export const GetHomeList = (dispatch, getState) => {
  fetch('/api/marketing/mobile/index_05b1e38510df1d26a19396c32b4a4e80.json')
    .then(response => response.json())
    .then(res => {
      // console.log(res.banner.dataList);
      dispatch(GetHomeBanner(res.banner.dataList));
    });
};

export const GetHomeLists = values => {
  return {
    type: constants.GetHomeList,
    values
  };
};

export const GetHomeData = (dispatch, getState) => {
  fetch(
    'https://shopapi.smartisan.com/product/skus?ids=100039740,100047001,100055601,100057503,100055301,100042203,100042801,100052801,100026701,100053314,100057603,100053202,100057220,100057708,100033802,100040501,100036501,100036401,100023501,100042203,100042803,100053001,100052803,100055302,100026801,100042205,100051706,100051704,100026701,100047101,100026801,100042206,100023501,100053002'
  )
    .then(response => response.json())
    .then(res => {
      // console.log(res.data.list);
      dispatch(GetHomeLists(res.data.list));
    });
};
