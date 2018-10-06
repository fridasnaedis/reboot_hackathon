const baseurl = process.env.REACT_APP_REBOOT_API;

async function request({ method, endpoint = '', data } = {}) {
  const url = `${baseurl}${endpoint}`;
  let options = {};

  if (data) {
    options = {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: method,
    };
  } else {
    options = {
      headers: {},
      method: method,
    };
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}

export { request };
