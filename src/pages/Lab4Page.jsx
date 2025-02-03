import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddPersonForm from "../components/AddPersonForm";
import EditPersonForm from "../components/EditPersonForm";

function Lab4Page() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lab 4</h1>
      <div style={{ textAlign: "center" }}>
        <Link to="/lab4/add">
          <button>Add Person</button>
        </Link>
        <Link to="/lab4/edit">
          <button>Edit Person</button>
        </Link>
      </div>
      <Routes>
        <Route path="add" element={<AddPersonForm />} />
        <Route path="edit/:id" element={<EditPersonForm />} />
      </Routes>
    </div>
  );
}

export default Lab4Page;