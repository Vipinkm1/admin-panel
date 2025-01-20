import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
    const navigate = useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className='font'>Sidebar</div>
      <div className='list-item'>
       <div onClick={()=> navigate('/')}>Dashboard</div>
       <div onClick={()=> navigate('/about')}>About</div>
       <div onClick={()=> navigate('/service')}>Service</div>
       <div onClick={()=> navigate('/contact')}>Contact</div>
       <div onClick={()=> navigate('/detail')}>Detail</div>
       <div onClick={()=> navigate('/product')}>Product</div>
      </div>
    </div>
  );
};

export default Sidebar;
