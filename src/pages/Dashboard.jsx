import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delete_data } from "../redux/expenseSlice";

function Dashboard() {
  const data = useSelector((state) => state.expense.data);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(data));
  }, [data]);

  return (
    <Layout>
      <div className="container mt-4">
        <h3 className="mb-4 text-center">Expense Dashboard</h3>

        {data.length === 0 ? (
          <p className="text-center">No Expenses Found</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>
                    {" "}
                    <i className="fas fa-money-bill-wave me-2"> </i>Amount
                  </th>
                  <th>
                    {" "}
                    <i className="fas fa-tag me-2"> </i>Category
                  </th>
                  <th>
                    {" "}
                    <i className="fas fa-align-left me-2"></i> Description
                  </th>
                  <th>
                    <i className="fas fa-cog me-2"> </i>Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((expense, index) => (
                  <tr key={index}>
                    <td>${expense.amount}</td>
                    <td>
                      {expense.category === "food" && (
                        <i className="fas fa-utensils me-2"></i>
                      )}
                      {expense.category === "travel" && (
                        <i className="fas fa-plane me-2"></i>
                      )}
                      {expense.category === "home" && (
                        <i className="fas fa-home me-2"></i>
                      )}
                      {expense.category === "credit" && (
                        <i className="fas fa-credit-card me-2"></i>
                      )}
                      {expense.category}
                    </td>
                    <td>{expense.description}</td>
                    <td>
                      <button
                        onClick={() => dispatch(delete_data(expense.id))}
                        className="btn text-bg-danger me-2"
                      >
                        Delete
                      </button>
                      <button className="btn text-bg-warning me-2">
                        <Link
                          to={`/edit/${expense.id}`}
                          className="text-decoration-none text-dark"
                        >
                          Edit
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
