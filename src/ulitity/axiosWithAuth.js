// import axios from 'axios';

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');

//   return axios.create({
//     headers: {
//       Authorization: token
//     },
//     baseURL: 'https://trip-split-buildweek.herokuapp.com/'
//   });
// };

import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    baseURL: 'https://trip-split-buildweek.herokuapp.com'
  });
};