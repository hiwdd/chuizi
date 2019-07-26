import * as constants from './constants';

const initState = {
  imageList: [],
  classifyList: []
};

export default (state = initState, action) => {
  if (action.type === constants.GetImageList) {
    return Object.assign({}, state, { imageList: action.value });
  }
  if (action.type === constants.GetClassifyList) {
    return Object.assign({}, state, { classifyList: action.value });
  }
  return state;
};
