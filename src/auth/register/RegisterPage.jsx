import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../hooks/auth";

const RegisterPage = () => {
  const { registerUser, setLoading } = auth();
  const navigate = useNavigate();

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
          navigate("/login");
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div>
          <p className="text-center mb-8">
            You have a account .{" "}
            <Link to="/login" className="text-car-review underline">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
