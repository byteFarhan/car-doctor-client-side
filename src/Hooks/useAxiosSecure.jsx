import axios from "axios";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import useAuth from "./useAuth";

// this is called INSTENCE
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { userSignOut } = useAuth();
  // const context = useContext(AuthContext);
  //   const { userSignOut} =context

  //   console.log(context);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        console.log(error.response);
        // console.log("log out the user");
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          userSignOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [navigate, userSignOut]);
  return axiosSecure;
};

export default useAxiosSecure;
