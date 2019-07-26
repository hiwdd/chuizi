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
      // console.log(res);
      dispatch(GetImageList(res));
    });
};

export const GetClassifyList = value => {
  return {
    type: constants.GetClassifyList,
    value
  };
};

export const GetClassifyData = (dispatch, getState) => {
  fetch(
    'https://shopapi.smartisan.com/product/skus?ids=100023501,100042203,100042801,100052803,100026701,100053001,100036501,100040501,100036401,100033802'
  )
    .then(response => response.json())
    .then(res => {
      // console.log(res.data.list);
      dispatch(GetClassifyList(res.data.list));
    });
};
