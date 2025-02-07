import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../hooks/auth";

const Login = () => {
  const { accountLogin, setLoading } = auth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    try {
      accountLogin(email, password)
        .then((currentUser) => {
          console.log(currentUser);
          navigate("/");
          toast.success("login Successfully");
        })
        .catch((err) => {
          setLoading(false);
          if (err.message.includes("auth/invalid-credential")) {
            console.log("yes");
            toast("Your email and password not matching. try agen !");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
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
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          <p className="text-center mb-8">
            You are a New User .
            <Link to="/register" className="text-car-review underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
