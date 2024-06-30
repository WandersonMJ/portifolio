import React, { lazy } from 'react';
import type { NextPage } from 'next';
import PageTemplate from 'template/PageTemplate';

const SkillsView = lazy(() => import('view/Skills'));

const Skills: NextPage = () => {
  return (
    <PageTemplate>
      <SkillsView />
    </PageTemplate>
  );
};

export default Skills;
