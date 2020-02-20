import * as React from 'react';
import { PricesList } from './PricesList';

interface PricesSideBarProps {}

export const PricesSideBar: React.FC<PricesSideBarProps> = () => {
  return (
    <>
      <PricesList />;
    </>
  );
};
