import * as constants from './constants';

const initState = {
  homeList: []
};

export default (state = initState, action) => {
  if (action.type === constants.GetHomeBanner) {
    return Object.assign({}, state, { homeList: action.value.banner.dataList });
  }
  return state;
};
