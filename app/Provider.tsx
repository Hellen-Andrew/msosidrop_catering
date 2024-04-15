import React, { ReactNode } from 'react';
import Header from './_components/header';
import Footer from './_components/Footer';

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default Provider;
