import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "Q-0": {
        questionTag: "Q-0",
        question: "",
        correct: "",
        choice: {
            number: -2,
            answer: "",
        },
        isCorrect: false,
    },
};

const outcomeSlice = createSlice({
    name: "outcome",
    initialState,
    reducers: {
        generate: (state, action) => {
            const question = action.payload.questionTag;
            return { ...state, [question]: action.payload };
        },
    },
});

export const { generate } = outcomeSlice.actions;
export default outcomeSlice.reducer;
