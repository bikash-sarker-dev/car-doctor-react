import { useContext } from "react";
import Hero from "../components/Home/Horo/Hero";
import Service from "../components/Home/serveice/Service";
import { AuthContext } from "../ContextApi";

const HomePage = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <h1>{name}</h1>
      <Hero />
      <Service />
    </div>
  );
};

export default HomePage;
