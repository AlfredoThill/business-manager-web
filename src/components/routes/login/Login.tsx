import CustomInput from '../../common/CustomInput';
import { Button } from '@mui/material';

export interface ILogin {
  handleLogin(): void;
  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void;
  isLoading: boolean;
  error: string | null;
}

const Login: React.FC<ILogin> = ({
  handleLogin,
  handleEmailChange,
  handlePasswordChange,
  isLoading,
  error,
}: ILogin) => {
  return (
    <div>
      <form>
        <CustomInput
          labelText='Email'
          id='email'
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={handleEmailChange}
          type='text'
        />
        <CustomInput
          labelText='Password'
          id='password'
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={handlePasswordChange}
          type='password'
        />
        <Button type='button' color='primary' onClick={handleLogin}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
