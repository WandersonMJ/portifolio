import React, { lazy } from 'react';
import type { NextPage } from 'next';
import PageTemplate from 'template/PageTemplate';

const CurriculumView = lazy(() => import('view/Curriculum'));

const Curriculum: NextPage = () => {
  return (
    <PageTemplate>
      <CurriculumView />
    </PageTemplate>
  );
}

export default Curriculum
