import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    id: "",
    amount: "",
    category: "",
    description: "",
  },
  data: JSON.parse(localStorage.getItem("expense")) || [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    fill_form: (state, action) => {
      state.form[action.payload.name] = action.payload.value;
    },
    send_data: (state, action) => {
      state.data.push(action.payload);
      state.form = {
        amount: "",
        category: "",
        description: "",
      };
    },

    delete_data: (state, action) => {
      state.data = state.data.filter(
        (expense) => expense.id !== action.payload
      );
    },

    update_data: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
  },
});

export const { fill_form, send_data, delete_data, update_data } =
  expenseSlice.actions;

export default expenseSlice.reducer;
