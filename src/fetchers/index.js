import axios from 'axios';
const url = '';

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
    const response = await axios.post(url, param);
    alert(response.data);
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
  const url = 'account/login/';
  try {
    const response = await axios.post(url, param);
    alert(response.data);
  } catch {}
};

const signupCreator = async ({ param }) => {
  const url = 'account/register/';
  try {
    const response = await axios.post(url, param);
    alert(response.data);
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