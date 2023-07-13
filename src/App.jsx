import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";
import MiscPage from "./pages/MiscPage";
import Navbar from "./components/Navbar";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   // {
//   //   path: "/schedule",
//   //   element: <SchedulePage />,
//   // },
// ]);

function App() {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/misc" element={<MiscPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
