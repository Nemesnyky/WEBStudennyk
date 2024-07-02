import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// pages
import { Home } from "./pages/Home.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
import Schedule from "./pages/Schedule.jsx";
import { KNU } from "./pages/KNU.jsx";
import { Students } from "./pages/Students.jsx";
import { Tasks } from "./pages/Tasks.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="students" element={<Students />} />
        <Route path="tasks" element={<Tasks />} />

        <Route path="KNU" element={<KNU />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="userprofile" element={<UserProfile />} />

        {/* <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
