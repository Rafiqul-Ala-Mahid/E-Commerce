/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Title/useTitle";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  const { createUser, googleUser } = useContext(AuthContext);
  useTitle('Signup');
  const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);
      form.reset();
      createUser(email, password)
          .then(result => {
              const user = result.user;
              console.log(user)
          })
        .catch(err => console.error(err));
  };

  const handleWithGoogle = () => {
    googleUser()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <button
            className="flex w-[50%] mx-auto border-2"
            onClick={handleWithGoogle}
          >
            <FcGoogle className="mx-[5px] mt-[3px]" />
            Continue With Google
          </button>
          <p className="mt-[10px] text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
