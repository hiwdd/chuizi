import { Input, Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';

const { Search } = Input;

ReactDOM.render(
  <div>
    <Search
      placeholder="请输入搜索内容"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <Button onClick={() => {
      this.props.history.goBack()
    }}
    >返回</Button>

    <div>
      <p>热门搜索</p>
      <ul>
        <li>
          <a href="">T恤</a>
        </li>
        <li>
          <a href="">移动电源</a>
        </li>
        <li>
          <a href="">卫衣</a>
        </li>
        <li>
          <a href="">帆布鞋</a>
        </li>
        <li>
          <a href="">保护套</a>
        </li>
      </ul>
    </div>
  </div>,
  mountNode,
);
