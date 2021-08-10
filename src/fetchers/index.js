import axios from 'axios';
const url = 'https://remac.co.kr';

const getCreator = async () => {
  try {
    const response = await axios.get(url, { params: { is_creator: true } });
    return response.data;
  } catch {}
};

const createRequest = async ({ param }) => {
  try {
    const response = await axios.post(url, param);
    console.log(response.data);
  } catch {}
};

const getUserDetail = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch {}
};

const signin = async ({ param }) => {
  try {
    const response = await axios
      .post(url + '/account/login/', param)
      .then(() => {
        return response.data;
      });
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

const postDeliverables = async ({ param }) => {
  try {
    const response = await axios.post(url, param);
    return response.data;
  } catch {}
};
export const Fetchers = {
  signin,
  signupRequester,
  signupCreator,
  createRequest,
  getCreator,
  getUserDetail,
  getBanks,
  getCategories,
  postDeliverables,
};
