import apis from 'shared/constants/apis';
import authHeader from 'shared/services/auth-header';
import fetch from 'shared/services/roots';

const getCurrentUserData = (token = authHeader()) =>
  fetch
    .get(apis.V2.ME, { headers: token })
    .then(response => response)
    .catch(err => Promise.reject(err));

const getAllUsers = (token = authHeader()) =>
  fetch
    .get(apis.V2.USERS_OVERVIEW, { headers: token })
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));

export default {
  getCurrentUserData,
  getAllUsers,
};
