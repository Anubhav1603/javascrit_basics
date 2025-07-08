import { useContext } from "react";
import { AppContext } from "./appcontext";

export const Details = () => {
  const phone = useContext(AppContext);
  return <>Details {phone}</>;
};
