import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./Config/router";

const RootRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RootRouter;
