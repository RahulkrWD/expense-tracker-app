import React, { useState } from "react";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { fill_form, send_data } from "../redux/expenseSlice";
import { useNavigate } from "react-router-dom";

function AddExpense() {
  const [form, setForm] = useState({
    id: "",
    amount: "",
    category: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value, id: new Date().getTime().toString() });
    dispatch(fill_form({ name, value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(send_data(form));
    navigate("/");
  }

  return (
    <Layout>
      <div className="container">
        <form onSubmit={handleSubmit} className="expense-form">
          <div className="form-group">
            <label htmlFor="amount">
              <i className="fas fa-money-bill-wave"></i> Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="Enter amount..."
              required
              onChange={handleInputChange}
              value={form.amount}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">
              <i className="fas fa-tag"></i> Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              required
              onChange={handleInputChange}
              value={form.category}
            >
              <option value="" disabled>
                Select category...
              </option>
              <option value="home">Home</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="credit">Credit Card</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <i className="fas fa-align-left"></i> Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              placeholder="Expense description..."
              onChange={handleInputChange}
              value={form.description}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddExpense;
