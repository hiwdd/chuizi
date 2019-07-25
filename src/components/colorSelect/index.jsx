import React from 'react';
import './index.scss';

class ColorSelect extends React.Component{
  render(){
    return(
      <div className="colorSelect">
        <p>颜色选择</p>
        <ul className="colorSelect-color">
          <li className="colores"></li>
          <li className="colores"></li>
          <li className="colores"></li>
          <li className="colores"></li>
          <li className="colores"></li>
        </ul>
      </div>
    )
  }
}

export default ColorSelect;
