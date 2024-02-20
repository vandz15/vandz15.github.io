import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { bannersReducer } from "@/redux/reducer/banners/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
    banners: bannersReducer,
});

export default rootReducer;
