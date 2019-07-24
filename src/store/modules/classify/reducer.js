import * as constants from './constants';

const initState = {
  imageList: []
};

export default (state = initState, action) => {
  if (action.type === constants.GetImageList) {
    return Object.assign({}, state, { imageList: action.value });
  }
  return state;
};
