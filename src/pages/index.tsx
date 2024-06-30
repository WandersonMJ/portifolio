import React, { lazy } from 'react';
import type { NextPage } from 'next';
import PageTemplate from 'template/PageTemplate';

const Dashboard = lazy(() => import('view/Dashboard'));

const Home: NextPage = () => {
  return (
    <PageTemplate>
      <Dashboard />
    </PageTemplate>
  );
};

export default Home;
