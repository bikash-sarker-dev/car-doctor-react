import { useContext } from "react";
import { AuthContext } from "../ContextApi";
const auth = () => {
  const result = useContext(AuthContext);
  return result;
};

export default auth;
