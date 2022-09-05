import React from 'react';
import { useAuth } from 'contexts/auth-provider';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated';
import { FullPageErrorCallback } from 'components/lib';
import ErrorBoundary from 'components/error-boundary';

import 'antd/dist/antd.less';

import './App.css';

function App() {
  const { user } = useAuth();
  return (
    <>
      <ErrorBoundary fallbackRender={FullPageErrorCallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </>
  );
}

export default App;
