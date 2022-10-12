import { useState, useCallback } from 'react';
import Login from './Login';
import userApi from '../../../api/userApi';
import { useAppDispatch } from '../../../store/hooks';
import { setToken } from '../../../store/userSlice';

const LoginContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const validate = (currEmail: string, currPassword: string): boolean => {
    if (!currEmail || !currPassword) return false;
    return true;
  };

  const handleLogin = (): void => {
    setIsLoading(true);
    userApi
      .login({ email, password })
      .then((data) => {
        dispatch(setToken(data.token));
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  }, []);

  return (
    <Login
      handleLogin={handleLogin}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default LoginContainer;
