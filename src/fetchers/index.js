import axios from 'axios';
import { useAuth } from '../contexts/AuthContextProvider';
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
    const response = await axios.post(url + '/api/profileimage/', param);
    return response.data;
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
  getCreator,
  getUserDetail,
  getBanks,
  getCategories,
  postDeliverables,
};
