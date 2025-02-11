import React from "react";
import auth from "../hooks/auth";

const ForgotPasswordPage = () => {
  const { resetPassword, setLoading } = auth();
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    if (!email) {
      return alert("please input email");
    }
    s;
    reetPassword(email)
      .then(() => {
        setLoading(false);
        alert("please check your email ");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleUpdatePassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
