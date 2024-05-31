import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    qid: 0,
    number: 10,
    level: "easy",
    type: "",
};

const endpointSlice = createSlice({
    name: "endpoint",
    initialState,
    reducers: {
        submit: (state, action) => {
            state.qid = action.payload.qid;
            state.number = action.payload.number;
            state.level = action.payload.level;
            state.type = action.payload.type;
        },
    },
});

export const { submit } = endpointSlice.actions;
export default endpointSlice.reducer;
