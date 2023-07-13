import { useState } from "react";
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
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/guard-the-lion-shrine" element={<LandingPage />} />
        <Route path="/guard-the-lion-shrine/about" element={<AboutPage />} />
        <Route
          path="/guard-the-lion-shrine/schedule"
          element={<SchedulePage />}
        />
        <Route path="/guard-the-lion-shrine/misc" element={<MiscPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
