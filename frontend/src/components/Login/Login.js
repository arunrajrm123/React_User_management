import React, { useState, useContext } from "react";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { changeUsername, changePassword } from "../../feautures/customerlogin";
import axiosInstance from "../../axios/axios";
import jwt_decode from "jwt-decode";
import Authcontext from "../../context/Logincontext";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const { userDecode, setUserDecode, accessToken, setAccessToken } =
    useContext(Authcontext);

  

  const navigate = useNavigate();
  const cust = useSelector((state) => state.customerlogin);
  const dispatch = useDispatch();
  const handleLoginSubmit = () => {
    const userData = {
      email: cust.value.email,
      password: cust.value.password
    };
    axiosInstance
      .post("login/",userData)
      .then((res) => {
        console.log(res.data);
        console.log(res);

        const tokensobj = {
          refresh: res.data.refresh,
          access: res.data.access,
        };

        setAccessToken(tokensobj);

        const reqdatas = jwt_decode(res.data.access);
        setUserDecode(reqdatas);
        localStorage.setItem("authToken", JSON.stringify(res.data.access));
        localStorage.setItem("details", JSON.stringify(res.data.alldatas));


        navigate("/dashboard");
      })
      .catch((err) => alert(err + "MWONE"));
  };
  // axios({
  //   method: "post",
  //   url: "http://127.0.0.1:8000/api/token/",
  //   data: {
  //     username: cust.value.username,
  //     password: cust.value.password,
  //   },
  // })

  return (
    <div>
    <Header />
    <div className="card login-card">
      <div className="card-body">
        <h2 className="card-title mb-4">Login</h2>
  
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="username"
              name="username"
              required
              value={cust.value.username}
              onChange={(e) => dispatch(changeUsername(e.target.value))}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              value={cust.value.password}
              onChange={(e) => dispatch(changePassword(e.target.value))}
            />
          </div>
  
          <button onClick={handleLoginSubmit} className="btn btn-success btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  

  );
};

export default Login;
