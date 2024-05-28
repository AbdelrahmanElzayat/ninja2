import { createContext } from "react";
import axios from "axios";
import { notify } from "../utils/notify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const Disactive = async (body) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!res.status) {
        throw new Error(res?.msg);
      }
      if (res.status === 200) {
        if (res.data.status === 101) {
        //   console.log(101);
        } else if (res.data.status === 100) {
          throw Error(res.data.message);
        } else if (res.data.status === 200) {
        //   console.log(202);
        }
      } else {
        throw Error(res.errors[0]);
      }
      notify("سيتم الغاء تفعيل حسابك خلال 29 يوم", "success");
      return res.data;
    } catch (error) {
      notify(error.message, "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        Disactive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
