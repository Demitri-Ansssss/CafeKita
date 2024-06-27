import { createSlice } from "@reduxjs/toolkit";

export const chartSlice = createSlice({
  name: "chartSlice",
  initialState: {
    chartData: [],
  },
  reducers: {
    addChartData: (state, action) => {
      state.chartData.push(action.payload); // Pushes data to chartData array
    },
    deleteChartDataByTitle: (state, action) => {
      state.chartData = state.chartData.filter(data => data.title !== action.payload);
    },
  },
});

export const { addChartData, deleteChartDataByTitle } = chartSlice.actions;
export default chartSlice.reducer;
