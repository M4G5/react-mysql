import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import NotFoundPage from "./pages/NotFoundPage";
import MaderasForm from "./pages/MaderasForm";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/new" element={<MaderasForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
