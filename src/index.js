import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import FacultyName from "./FacultyName";
import ContactUs from "./ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/FacultyName" element={<FacultyName />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
