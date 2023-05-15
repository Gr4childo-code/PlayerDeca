import React from 'react';
import Header from '@/src/ui/components/global/Header';

const Layout = ({ children }: React.ReactNode): JSX.Element => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default Layout;
