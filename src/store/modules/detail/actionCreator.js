//详情页的仓库

export const GetDetailList = value => {
  return {
    type: 'getDetailList',
    value
  };
};

//购物车
export const GetShopcarList = value => {
  return {
    type: 'gatShopcarList',
    value
  };
};
