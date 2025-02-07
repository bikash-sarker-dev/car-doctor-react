import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { data } = useLoaderData();
  return <div>Details</div>;
};

export default Details;
