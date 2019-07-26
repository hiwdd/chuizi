const initState = {
  detailList: window.sessionStorage.getItem('detailList')
    ? JSON.parse(window.sessionStorage.getItem('detailList'))
    : []
};

export default (state = initState, action) => {
  if (action.type === 'getDetailList') {
    return Object.assign({}, state, { detailList: action.value });
  }
  return state;
};
