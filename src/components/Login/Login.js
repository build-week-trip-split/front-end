import React, { useState } from "react";

import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

export default function Login() {
  ///State
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  console.log(setLogin);

  //Handler Functions

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form>
          <Input
            type="text"
            name="username"
            placeholder="Login"
            value={login.username}
            onChange={e => {
              const value = e.target.value;
              setLogin(prevState => {
                return { ...prevState, username: value };
              });
            }}
          />
          <Input
            type="password"
            name="password"
            value={login.password}
            placeholder="Password"
            onChange={e => {
              const value = e.target.value;
              setLogin(prevState => {
                return { ...prevState, password: value };
              });
            }}
          />
        </form>
      </div>
    </div>
  );
}
