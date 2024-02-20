import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { logosReducer } from "@/redux/reducer/logos/reducer";
import { bannersReducer } from "@/redux/reducer/banners/reducer";
import { areaLayananReducer } from "@/redux/reducer/areaLayanan/reducer";
import { numberLayananReducer } from "@/redux/reducer/numberLayanan/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
    logos: logosReducer,
    banners: bannersReducer,
    areaLayanan: areaLayananReducer,
    numberLayanan: numberLayananReducer,
});

export default rootReducer;
