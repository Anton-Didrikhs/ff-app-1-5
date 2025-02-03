import { useContext } from "react";
import AppContext from "../data/AppContext.js";

const useItems = () => {
  const { items } = useContext(AppContext);
  return items;
};

export default useItems;