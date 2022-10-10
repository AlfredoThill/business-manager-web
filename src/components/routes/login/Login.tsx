import CustomInput from '../../common/CustomInput';

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
        <CustomInput labelText='Email' id='email' handleChange={handleEmailChange} type='email' />
        <CustomInput
          labelText='Password'
          id='password'
          handleChange={handlePasswordChange}
          type='password'
        />
        <button onClick={handleLogin}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
