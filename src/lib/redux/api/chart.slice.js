import { createSlice } from "@reduxjs/toolkit";

export const chartSlice = createSlice({
  name: "Yout Cart",
  initialState: {
    chartData: [],
  },
  reducers: {
    addChartData: (state, action) => {
      state.chartData.push(action.payload);
    },
    deleteChartDataByTitle: (state, action) => {
      state.chartData = state.chartData.filter(
        (data) => data.id !== action.payload
      );
    },
  },
});

export const { addChartData, deleteChartDataByTitle } = chartSlice.actions;
export default chartSlice.reducer;
