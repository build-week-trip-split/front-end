import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = loginUser => dispatch => {
  localStorage.setItem("username", loginUser.username);
  dispatch({ type: LOGIN_START });
  return axios
    .post(
      "https://trip-split-buildweek.herokuapp.com/oauth/token",
      `grant_type=password&username=${loginUser.username}&password=${loginUser.password}`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.access_token);
    })
    .catch(err => console.log(err));
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const addNewUser = newUserInfo => dispatch => {
  const newUser = {
    username: newUserInfo.username,
    password: newUserInfo.password
  };

  dispatch({ type: SIGN_UP_START });
  return axios
    .post("https://trip-split-buildweek.herokuapp.com/createnewuser", newUser)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAIL });
      console.log(err);
    });
};
