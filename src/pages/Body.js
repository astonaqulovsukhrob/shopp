import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "./Main";

function Body() {
  return (
    <Suspense fallback={<h1>..loading</h1>}>
      <Routes>
        {pages.map((page) => (
          <Route path={page?.path} element={page?.page} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default Body;
