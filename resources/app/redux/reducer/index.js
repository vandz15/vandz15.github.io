import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { logosReducer } from "@/redux/reducer/logos/reducer";
import { bannersReducer } from "@/redux/reducer/banners/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
    logos: logosReducer,
    banners: bannersReducer,
});

export default rootReducer;
