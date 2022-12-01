import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
