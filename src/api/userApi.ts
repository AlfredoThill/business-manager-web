import _fetch from './fetch';

export interface Ilogin {
  email: string;
  password: string;
}

const login = async ({ email, password }: Ilogin) => {
  const res = await _fetch({
    url: 'localhost:8081/login',
    params: { email, password },
    method: 'POST',
  });
  return res;
};

export default {
  login,
};
