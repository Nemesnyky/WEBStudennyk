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
import PostCreating from "./pages/PostCreating.jsx";

import { Home } from "./pages/Home.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
import Schedule from "./pages/Schedule.jsx";
import { KNU } from "./pages/KNU.jsx";
import { Students } from "./pages/Students.jsx";
import { Tasks } from "./pages/Tasks.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import UsersList from "./pages/UsersList";
import UserForm from "./pages/UserForm";
import Subject from "./pages/Subject.jsx";
import CreateLecturer from "./pages/CreateLecturer.jsx";
import Lecturer from "./pages/Lecturer.jsx";

import LoginPage from "./pages/LoginPage";

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
        <Route path="userlist" element={<UsersList />} />
        <Route path="userform" element={<UserForm />} />
        <Route path="userform/:id" element={<UserForm />} />
        <Route path="qwqw" element={<LoginPage />} />
        <Route path="subject" element={<Subject />} />
        <Route path="postCreating" element={<PostCreating />} />
        <Route path="createLecturer" element={<CreateLecturer />} />
        <Route path="lecturer" element={<Lecturer />} />

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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></link>
  </React.StrictMode>
);
