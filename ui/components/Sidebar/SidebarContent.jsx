import React from 'react';
import SidebarMenu from './SidebarMenu';

export default function SidebarContent({ children }) {
  return (
    <div className='container'>
      <div className='profile'>
        <div className='profile__menu'>
          <SidebarMenu />
        </div>
        <div className='profile__content'>{children}</div>
      </div>
    </div>
  );
}
