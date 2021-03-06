import axios from 'axios';

const url = 'https://remac.co.kr';
const getCreators = async () => {
  try {
    const response = await axios.get(url + '/api/mainpage');
    return response.data;
  } catch {}
};

const createRequest = async ({ request, authToken }) => {
  const config = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    data: request,
  };
  axios('https://remac.co.kr/api/request/', config)
    .then((response) => {
      return 1;
    })
    .catch((e) => console.log(e));
};

const getUserInformation = async ({ authToken }) => {
  const config = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios(
    'https://remac.co.kr/account/after_register/',
    config
  );
  return response.data;
};

const getUserDetail = async (param) => {
  try {
    const response = await axios.get(url + '/api/detail/', param);
    return response.data;
  } catch {}
};

const signin = async ({ param }) => {
  try {
    const response = await axios.post(url + '/account/login/', param);
    return response.data;
  } catch {}
};

const getBanks = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch {}
};

const getCategories = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch {}
};

const signupRequester = async ({ param }) => {
  param['channel_category'] = '';
  param['channel_intro'] = '';
  param['channel_url'] = '';
  param['bank'] = '';
  param['depositor'] = '';
  param['account'] = '';
  try {
    const response = await axios.post(url + '/account/register/', param);
    return response.data;
  } catch {
    alert(1);
  }
};

const signupCreator = async ({ param }) => {
  try {
    const response = await axios.post(url + '/account/register/', param);
    return response.data;
  } catch {}
};

const signupProfileImage = async ({ param }) => {
  try {
    const response = await axios.patch(url + '/api/profileimage/', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4Njk4NjAzLCJqdGkiOiI1NmY2ODJlNDI0NjM0YzcyYTYzMmQ4ZTUyMjNiNzI0NiIsInVzZXJfaWQiOjEwLCJ1c2VybmFtZSI6InF3ZXJxd2VyIn0.EMkyia-oDSHhGRtlAWd22Y84vd6mJukh7FDLzksmWrM',
      },
      ...param,
    });
    return response;
  } catch {}
};

const postDeliverables = async ({ param }) => {
  try {
    const response = await axios.post(url, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4Njk4NjAzLCJqdGkiOiI1NmY2ODJlNDI0NjM0YzcyYTYzMmQ4ZTUyMjNiNzI0NiIsInVzZXJfaWQiOjEwLCJ1c2VybmFtZSI6InF3ZXJxd2VyIn0.EMkyia-oDSHhGRtlAWd22Y84vd6mJukh7FDLzksmWrM',
      },
      param,
    });
    return response.data;
  } catch {}
};

export const Fetchers = {
  signin,
  signupRequester,
  signupCreator,
  signupProfileImage,
  createRequest,
  getCreators,
  getUserDetail,
  getBanks,
  getCategories,
  getUserInformation,
  postDeliverables,
};
