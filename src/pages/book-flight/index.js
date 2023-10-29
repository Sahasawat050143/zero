import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "../no-match/NoMatch";
import { BookFlightPage } from "./BookFlightPage";

export const index = () => {
  return (
    // <Routes>
    //   <Route>
    //     <Route path="/bookflight" element={<BookFlightPage />} />
    //     <Route path="*" element={<NoMatch />} />
    //   </Route>
    // </Routes>
    <BookFlightPage />
  );
};
