import React, { useState } from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { update_data } from "../redux/expenseSlice";

function EditExpense() {
  const data = useSelector((state) => state.expense.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const filterData = data.find((expense) => expense.id == id);

  const [formData, setFormData] = useState({
    amount: filterData?.amount || "",
    category: filterData?.category || "",
    description: filterData?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...filterData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      update_data({
        id: id,
        updatedExpense: formData,
      })
    );

    navigate("/");
  };

  return (
    <Layout>
      <div className="container">
        <form className="expense-form" onSubmit={handleSubmit}>
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
              value={formData.amount}
              onChange={handleChange}
              required
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
              value={formData.category}
              onChange={handleChange}
              required
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
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> Edit Expense
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default EditExpense;
