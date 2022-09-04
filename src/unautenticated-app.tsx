import { Button } from 'antd';
import Card from 'antd/lib/card/Card';
import { useCallback, useState } from 'react';
import { LoginScreen } from 'screens/login';
import { RegisterScreen } from 'screens/register';

export const UnauthenticatedApp = () => {
  const [isRegisetr, setRegister] = useState(false);

  const handleState = useCallback(() => {
    setRegister(!isRegisetr);
  }, [isRegisetr]);

  return (
    <div className="unauthenticated-app">
      <Card>
        {isRegisetr ? <LoginScreen /> : <RegisterScreen />}
        <Button onClick={handleState}>
          {isRegisetr ? 'goto注册' : 'goto登录'}
        </Button>
      </Card>
    </div>
  );
};
