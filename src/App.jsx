import  React  from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import "./App.css";
import Default from "./components/layouts/Default";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Job from "./pages/Job";
import SearchPage from "./pages/SearchPage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Default/>}>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/job/:id/:slug" element={<Job />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<PageNotFound />} /> 
         </Route>
      </Routes>
    </>
  );
}

export default App;
