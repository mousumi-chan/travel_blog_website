import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignupLogin from "./routes/SignupLogin"; // <-- NEW
import CreateBlog from "./components/CreateBlog"; // Adjust path as needed

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupLogin />} /> {/* <-- NEW */}
        <Route path="/create-blog" element={<CreateBlog />} />
        {/* <Navbar />
      <Home />
      <Destination />
      <Trip />
      <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
