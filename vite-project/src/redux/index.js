import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";
import { dishSlice } from "./entities/dish";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, userSlice, reviewSlice, dishSlice),
});  
