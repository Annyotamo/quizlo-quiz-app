import { configureStore } from "@reduxjs/toolkit";
import endpointReducer from "./Endpoint Params/endpointSlice";
import outcomeReducer from "./Endpoint Params/outcomeSlice";
export const store = configureStore({
    reducer: {
        endpoint: endpointReducer,
        outcome: outcomeReducer,
    },
});
