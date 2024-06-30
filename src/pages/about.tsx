import React, { lazy } from 'react';
import type { NextPage } from 'next';
import PageTemplate from 'template/PageTemplate';

const AboutView = lazy(() => import('view/About'));

const About: NextPage = () => {
  return (
    <PageTemplate>
      <AboutView />
    </PageTemplate>
  );
}

export default About
