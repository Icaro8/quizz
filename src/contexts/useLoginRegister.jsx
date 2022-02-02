import React, { createContext, useContext, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  async function handleCookies(cookie) {
    setCookie(null, "quizz.user", cookie.token, {
      maxAge: 60 * 60 * 24,
    });

    const { ["quizz.user"]: user } = parseCookies();
    const decode = jwt_decode(user);
    console.log(decode);
  }

  return (
    <authContext.Provider value={{ user, setUser, handleCookies }}>
      {children}
    </authContext.Provider>
  );
}

// function useNewUser() {
//   const data = useContext();

//   return data;
// }

export function useLogin() {
  const data = useContext(authContext);

  return data;
}
