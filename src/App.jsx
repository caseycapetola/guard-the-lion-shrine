import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
