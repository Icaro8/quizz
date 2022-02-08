import React, { createContext, useContext, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  async function handleSetCookies(cookie) {
    setCookie(null, "quizz.user", cookie, {
      maxAge: 60 * 60 * 24,
    });
  }

  return (
    <authContext.Provider value={{ user, setUser, handleSetCookies }}>
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
