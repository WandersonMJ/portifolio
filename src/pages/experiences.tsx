import React, { lazy } from 'react';
import type { NextPage } from 'next';
import PageTemplate from 'template/PageTemplate';

const ExperiencesView = lazy(() => import('view/Experiences'));

const Experiences: NextPage = () => {
  return (
    <PageTemplate>
      <ExperiencesView />
    </PageTemplate>
  );
}

export default Experiences
