import React from "react";
import { Navigation } from "./Navigation.js";
import { Home } from "./Home.js";
import { AboutUS } from "./AboutUs.js";
import { WhatWeDo } from "./WhatWeDo.js";
import { Projects } from "./Projects.js";
import { Footer } from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  return (
    <div id="app">
      <Navigation />
      <Home />
      <AboutUS />
      <WhatWeDo />
      <Projects />
      <Footer />
    </div>
  );
}
