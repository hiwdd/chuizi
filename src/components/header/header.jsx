
import React from 'react';
import { Icon } from 'antd';
import './header.scss';

const Header = () => {
  return(
    <div className='header'> 
      <Icon type="menu" className='navMenu' onClick={()=>{
        
      }}/> 
      <span>分类</span>

      <Icon type="search" className='navSreach' onClick={() => {
        
      }}/> 

    </div>
  )
}
export default Header;
