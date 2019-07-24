const initState = {
  userInfo: window.sessionStorage.getItem('userInfo')
    ? JSON.parse(window.sessionStorage.getItem('userInfo'))
    : null
};

export default (state = initState, action) => {
  if (action.type === 'addLoginUser') {
    return Object.assign({}, state, { userInfo: action.values });
  }
  return state;
};
