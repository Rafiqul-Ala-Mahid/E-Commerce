import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Title/useTitle";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const { login, googleUser } = useContext(AuthContext);
  useTitle("login");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const jsonWeb = (jsonUser) => {
    fetch("http://localhost:5001/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("genius-token", data.token);
        navigate(from, { replace: true });
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        console.log(user);
        // navigate(from,{replace:true})
        const currentUser = {
          email: user.email,
        };

        jsonWeb(currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logInWithGoogle = () => {
    googleUser()
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        console.log(user);
        // navigate(from, { replace: true });
        const currentUser = {
          email: user.email,
        };
        jsonWeb(currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {success && <p className="text-success">successfully login</p>}
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <button
            className="flex w-[50%] mx-auto border-2"
            onClick={logInWithGoogle}
          >
            <FcGoogle className="mx-[5px] mt-[3px]"/>
            Continue With Google
          </button>
          <p className="mt-[10px] text-center">
            New to Genius Car?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
