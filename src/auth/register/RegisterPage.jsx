import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../ContextApi";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  console.log(registerUser);
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password };

    try {
      registerUser(email, password).then((response) => {
        console.log(response);
        const user = response.user;
        if (response.user) {
          toast.success("successfully register !");
          form.reset();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegisterSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">UserName</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="user name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
