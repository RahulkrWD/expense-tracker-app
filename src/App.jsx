import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import EditExpense from "./pages/EditExpense";
import AddExpense from "./pages/AddExpense";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddExpense />} />
      <Route path="/edit/:id" element={<EditExpense />} />
      <Route path="/stats" element={<Statistics />} />
    </Routes>
  );
}

export default App;
