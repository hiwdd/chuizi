import React from 'react';
import './index.scss';

class ColorSelect extends React.Component{
  render(){
    return(
      <div className="colorSelect">
        <p>颜色选择</p>
        <ul className="colorSelect-color">
          <li className="colores">
            <span></span>
            <p>幻夜黑</p>
          </li>
          <li className="colores">
            <span></span>
            <p>气质灰</p>
          </li>
          <li className="colores">
            <span></span>
            <p>星际蓝</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default ColorSelect;
