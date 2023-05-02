import React from 'react';
import Header from '@/ui/components/global/Header';

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default Layout;
