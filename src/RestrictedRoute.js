import React from "react";
import { Route, Navigate } from "react-router-dom";
import { CartState } from "./context/Context";

const RestrictedRoute = ({ path, element: Element }) => {
  const { loggedin } = CartState();
  return (
    <Route
      path={path}
      element={loggedin.isLoggedIn ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default RestrictedRoute;
