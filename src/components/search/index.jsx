import { SearchBar } from 'antd-mobile';
import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          placeholder="自动获取光标"
          ref={ref => (this.autoFocusInst = ref)}
        />

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
      </div>
    );
  }
}

export default Search;
