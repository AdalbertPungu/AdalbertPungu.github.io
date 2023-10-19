import React from "react";
import "./styles.css";

import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="main">
        <section className="main__section">
          <Info />
          <About />
          <Interest />
          <Footer />
        </section>
      </main>
    </>
  );
}
