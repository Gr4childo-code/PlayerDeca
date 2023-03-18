import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <div className='profile'>
        <div className='profile__menu'>
          <Sidebar />
        </div>
        <div className='profile__content'>{children}</div>
      </div>
    </div>
  );
}
