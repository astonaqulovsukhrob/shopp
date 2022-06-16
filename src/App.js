import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
const Body = lazy(() => import("./pages/Body"));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="App">
        <ToastContainer />
        <Body />
      </div>
    </Suspense>
  );
}

export default App;
