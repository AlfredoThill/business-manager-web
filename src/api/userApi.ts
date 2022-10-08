import _fetch from './fetch';

export interface Ilogin {
  email: string;
  password: string;
}

const login = async ({ email, password }: Ilogin): Promise<{ message: string; token: string }> => {
  const res = await _fetch({
    url: 'localhost:8081/login',
    params: { email, password },
    method: 'POST',
  });
  return res as { message: string; token: string };
};

export default {
  login,
};
