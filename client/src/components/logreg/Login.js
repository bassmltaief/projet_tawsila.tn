import "./login.css";
import { React, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {  Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { get_elements, login } from "../../js/actions/userAction";
import { register } from "../../js/actions/userAction";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const signin = (e1)=>{
	  e1.preventDefault();
	  const newUser={email2,password2}
	  dispatch(get_elements(newUser));
	  history.push('/sing')
  }

  const { isAuth, loading, errors } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  }, []);

//   const valeur1=document.getElementById("signup-password");
//   const valeur2=document.getElementById("signup-password-confirm");

//   const v1=(valeur1.value);
//   const v2=(valeur2.value);

  return (
    <section className="forms-section">
      {errors.id === "login" && (
        <Alert variant="danger">{errors.err[0].msg}</Alert>
      )}
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <div>
          <h1 className="section-title">Bienvenue chez tawsila.tn</h1>

          <div className="forms">
            <div className="form-wrapper is-active">
              <button type="button" className="switcher switcher-login">
                Login
                <span className="underline"></span>
              </button>

              <form className="form form-login">
                <fieldset>
                  <legend>
                    Please, enter your email and password for login.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="login-email">E-mail</label>
                    <input
                      id="login-email"
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input
                      id="login-password"
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </fieldset>
                <button type="submit" className="btn-login" onClick={loginUser}>
                  Login
                </button>
              </form>
            </div>



            <div className="form-wrapper">
              <button type="button" className="switcher switcher-signup" >
                Sign Up
                <span className="underline"></span>
              </button>
			  {errors.id === "register" && (
				<Alert variant="danger">{errors.err[0].msg}</Alert>
			  )}
			  {loading ? (
				<Spinner animation="border" role="status">
				  <span className="sr-only">Loading...</span>
				</Spinner>
			  ) : isAuth ? (
				<Redirect to="/profile" />
			  ) : (
              <form className="form form-signup">
                <fieldset>
                  <legend>
                    Please, enter your email, password and password confirmation
                    for sign up.
                  </legend>
				  
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required onChange={(e1) => setEmail2(e1.target.value)}
					value={email2}/>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="password" required onChange={(e1) => setPassword2(e1.target.value)}
					value={password2}/>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password-confirm">
                      Confirm password
                    </label>
                    <input
                      id="signup-password-confirm"
                      type="password"
					  onChange={(e1) => setConfirm(e1.target.value)}
					  value={confirm}
                      required
                    />
                  </div>
				  
                </fieldset>

				{password2===confirm ?
					<div>
					
                <Link to="/sing">
                  <button type="submit" className="btn-signup" onClick={signin}>
                    Continue
                  </button> 
                </Link> 
				<Alert variant="success" >
					Password is ok
				  </Alert>
				</div>:
				<Alert variant="danger" >
				Plz check the password
			  </Alert> }

              </form>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
