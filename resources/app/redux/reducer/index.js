import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { productsReducer } from "@/redux/reducer/products/reducer";
import { testimoniReducer } from "@/redux/reducer/testimoni/reducer";
import { floatingWhatsappReducer } from "@/redux/reducer/floatingWhatsapp/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
    products: productsReducer,
    testimoni: testimoniReducer,
    floatingWhatsapp: floatingWhatsappReducer,
});

export default rootReducer;
