import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://car-doctor-server-nine-delta-13.vercel.app/cars")
        .then((res) => {
          if (res.data) {
            setService(res.data.splice(0, 6));
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="my-32 container">
      <div className="text-center">
        <h2 className="text-4xl">Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quos qui reiciendis quas eos magnam corporis facilis obcaecati, error
        </p>
      </div>
      <div className="grid grid-cols-3 my-10 gap-5">
        {service.map((item) => (
          <div key={item._id} className="card bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${item._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
