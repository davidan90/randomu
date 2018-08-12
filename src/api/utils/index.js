export const checkStatus = response => {
  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }
  return response;
};

export const logError = apiName => error => {
  console.error(`${apiName} ${error}`);
};
