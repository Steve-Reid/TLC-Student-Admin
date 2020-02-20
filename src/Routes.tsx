import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './layouts/main/MainLayout';
import { Header } from './components/Header';

export const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    </>
  );
};
