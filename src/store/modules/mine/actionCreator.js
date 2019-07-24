//登录触发动作
import { message } from 'antd';
export const loginAction = values => {
  return {
    type: 'addLoginUser',
    values
  };
};

//请求用户
export const getLoginUser = (values, historys) => {
  return (dispatch, getState) => {
    fetch('http://localhost:9090/user')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          if (
            res[i].userinfo === values.userinfo &&
            res[i].password === values.password
          ) {
            window.sessionStorage.setItem('userInfo', JSON.stringify(values));
            dispatch(loginAction(values));
            message.success('登录成功', 1);
            setTimeout(() => {
              historys.replace('/mine');
            }, 1000);
            return;
          }
        }
        message.error('用户名或密码错误', 1);
      });
  };
};
