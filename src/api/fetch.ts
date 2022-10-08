export interface I_fetch {
  url: string;
  params: Record<string, unknown>;
  options?: RequestInit;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

const _fetch = async ({
  url,
  params = {},
  method = 'GET',
  options = {},
}: I_fetch): Promise<unknown> => {
  const bearer = 'Bearer ' + localStorage.getItem('user_token'); // or something

  const baseOptions = {
    method: method,
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json',
    },
    ...options,
  };

  let request: Request;
  if (method === 'GET') {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    request = new Request(url + searchParams, baseOptions);
  } else {
    request = new Request(url, { ...baseOptions, body: JSON.stringify(params) });
  }

  const res = await fetch(request);
  const isJson = res.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    const error = (data && data.message) || res.status;
    throw new Error(error);
  }

  return data;
};

export default _fetch;
