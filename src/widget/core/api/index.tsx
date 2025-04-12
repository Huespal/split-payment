type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export const APIUrl = 'http://localhost:8080/';

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

export const api = async <T,>(
  url: string, method: HTTPMethod, body?: T
) => {
  const headers: [string, string][] = [
    ['accept', 'application/json'],
    ['content-type', 'application/json']
  ];

  const data = await fetch(`${APIUrl}${url}`, {
    headers,
    method,
    body: JSON.stringify(body)
  });
  try {
    const response = await data.json();

    if (response.error) {
      throwError(response.error);
    } else {
      return response;
    }
  } catch (error) {
    throwError(error);
  }
}