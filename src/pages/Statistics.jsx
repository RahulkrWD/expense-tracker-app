import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

function Statistics() {
  const data = useSelector((state) => state.expense.data);
  let obj = {};
  data.map((item) => {
    if (!obj[item.category]) {
      obj[item.category] = [];
    }
    obj[item.category].push(item);
    return obj;
  });
  return (
    <Layout>
      <div>
        <h3>Statistics</h3>

        {data.length == 0 ? (
          <div>
            <h3 className="text-center">No Expenses Found</h3>
          </div>
        ) : (
          <div>
            <div>
              {obj.credit.map((item) => (
                <div key={item.id}></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Statistics;
