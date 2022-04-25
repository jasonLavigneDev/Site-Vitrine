import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = "https://sharkay-aa.github.io/Site-Vitrine/"
      // const url = window.location.origin + "/";
      console.log("url",url)

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            navigate(after);
          }, 100);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            navigate(before);
          }, 100);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              navigate("project-1");
            }, 100);
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "/");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              navigate("project-4");
            }, 100);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement)
  }, [navigate])

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
        <Route path="/project-4" element={<Project4 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
