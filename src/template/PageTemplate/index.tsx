import React, { lazy, Suspense } from 'react';

const Loading = lazy(() => import('view/Loading'));

const PageTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

export default PageTemplate;
