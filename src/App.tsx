import React from 'react';
import { useAuth } from 'contexts/auth-provider';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated';

import 'antd/dist/antd.less';

import './App.css';

function App() {
  const { user } = useAuth();
  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
