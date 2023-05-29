import React from "react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import { publicRoute, privateRoute } from "./allRoute";
import Layout from "./Layout";
import { useSelector } from "react-redux";

function AuthRoute() {
  const { user } = useSelector((state) => state.root);
  return (
    <>
      <Routes>
        {!user?.isLoggedIn
          ? publicRoute.map((route, inx) => {
              return (
                <>
                  <Route
                    path={route.path}
                    exact={true}
                    key={inx}
                    element={<Layout {...route} />}
                  />
                  <Route path={"*"} element={<Navigate to="/" replace />} />
                </>
              );
            })
          : privateRoute.map((route, inx) => {
              return (
                <>
                  <Route
                    path={route.path}
                    exact={true}
                    key={inx}
                    element={<Layout {...route} />}
                  />
                  <Route path={"*"} element={<Navigate to="/home" replace />} />
                </>
              );
            })}
      </Routes>
    </>
  );
}

export default AuthRoute;
