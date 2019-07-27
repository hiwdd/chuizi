const initState = {
  detailList: window.sessionStorage.getItem('detailList')
    ? JSON.parse(window.sessionStorage.getItem('detailList'))
    : [],
  shopcarList: []
};

export default (state = initState, action) => {
  if (action.type === 'getDetailList') {
    return Object.assign({}, state, { detailList: action.value });
  }
  if (action.type === 'gatShopcarList') {
    return Object.assign({}, state, {
      shopcarList: [...state.shopcarList, action.value]
    });
  }
  return state;
};
