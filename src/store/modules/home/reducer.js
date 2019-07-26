import * as constants from './constants';

const initState = {
  homeList: [],
  homeData: []
};

export default (state = initState, action) => {
  if (action.type === constants.GetHomeBanner) {
    return Object.assign({}, state, { homeList: action.value });
  }
  if (action.type === constants.GetHomeList) {
    return Object.assign({}, state, { homeData: action.values });
  }
  return state;
};
