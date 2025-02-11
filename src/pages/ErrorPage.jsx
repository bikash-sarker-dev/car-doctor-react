import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="font-bold text-6xl">404</h1>
      <p>Not Found Page</p>
      <Link to={"/"}>Back to Home </Link>
    </div>
  );
};

export default ErrorPage;
