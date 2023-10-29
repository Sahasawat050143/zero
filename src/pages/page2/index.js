import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "../no-match/NoMatch";
import { Page2 } from "./page2/Page2";

export const index = () => {
  return (
    // <Routes>
    //   <Route>
    //     <Route path="/page2" element={<Page2 />} />
    //     <Route path="*" element={<NoMatch />} />
    //   </Route>
    // </Routes>
    <Page2 />
  );
};