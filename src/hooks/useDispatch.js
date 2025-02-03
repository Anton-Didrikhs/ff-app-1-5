import { useContext } from "react";
import AppContext from "../data/AppContext.js";

const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export default useDispatch;