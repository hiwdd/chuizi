//动作生成文件
import * as constants from './constants';

export const GetImageList = value => {
  return {
    type: constants.GetImageList,
    value
  };
};

export const GetImageData = (dispatch, getState) => {
  fetch('/api/marketing/mobile/category_dccfd62f765b5cd6b19d2710329d7003.json')
    .then(response => response.json())
    .then(res => {
      console.log(res);
      dispatch(GetImageList(res));
    });
};
