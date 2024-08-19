"use client";
import { createContext, useState } from "react";
import Cookies from "js-cookie";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const roles = Cookies.get("account_status");
  return <Contex.Provider value={{ roles }}>{children}</Contex.Provider>;
};

export { Contex, Provider };
