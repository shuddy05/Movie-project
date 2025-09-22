import React from "react";
import "./App.css";
import { lazy, Suspense } from "react";
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const Bookmarked = lazy(() => import("./pages/Bookmarked"));
const Error404 = lazy(() => import("./pages/Error404"));
import DashboardLayout from "./layout/DashboardLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Suspense fallback={<h1>Loading Movie App</h1>}>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-series" element={<TvSeries />} />
            <Route path="bookmarked" element={<Bookmarked />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
