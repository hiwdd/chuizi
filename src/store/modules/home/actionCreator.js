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
      console.log(res);
      dispatch(GetHomeBanner(res.banner.dataList));
    });
};
