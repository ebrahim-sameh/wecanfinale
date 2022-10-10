import React from "react";
import { Footer, Header } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import SignleCategory from "./pages/SingleCategry";
import AboutPage from "./pages/AboutPage";

function App() {
  const categories = [
    {
      id: 1,
      title: "Store design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!",
    },
    {
      id: 2,
      title: "Interior design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!",
    },
    {
      id: 3,
      title: "Kitchens",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!",
    },
    {
      id: 4,
      title: "Accessories",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!",
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/we-can" index element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route
          path="/optical-store-design"
          element={<SignleCategory data={categories[0]} />}
        />
        <Route
          path="/interior-design"
          element={<SignleCategory data={categories[1]} />}
        />
        <Route
          path="/kitchens"
          element={<SignleCategory data={categories[2]} />}
        />
        <Route
          path="/accessories"
          element={<SignleCategory data={categories[3]} />}
        />
        <Route
          path="/about-us"
          element={<AboutPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
