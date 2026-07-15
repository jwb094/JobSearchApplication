import { useState } from "react";
import ApplyButton from "./components/ApplyButton";
import Breadcrumb from "./components/Breadcrumb";
import ErrorAlert from "./components/ErrorAlert";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import SummaryCard from "./components/SummaryCard";
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <ApplyButton />
      <Breadcrumb />
      <ErrorAlert />
      <Filters />
      <Form />
      <JobCard />
      <Pagination />
      <SearchBar />
      <SortDropdown />
      <SummaryCard />
      <Footer/>
    </>
  );
}

export default App;
