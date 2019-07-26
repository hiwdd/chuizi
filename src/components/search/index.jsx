import { SearchBar } from 'antd-mobile';
import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search_header">
          <SearchBar
            placeholder="请输入要搜索的内容"
            ref={ref => (this.autoFocusInst = ref)}
          />
          <span className="searchs_f">
            <NavLink to="/">返回</NavLink>
          </span>
        </div>
        <div className="search_body">
          <p>热门搜索</p>
          <ul>
            <li>
              <NavLink to="/">T恤</NavLink>
            </li>
            <li>
              <NavLink to="/">移动电源</NavLink>
            </li>
            <li>
              <NavLink to="/">卫衣</NavLink>
            </li>
            <li>
              <NavLink to="/">帆布鞋</NavLink>
            </li>
            <li>
              <NavLink to="/">保护套</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
