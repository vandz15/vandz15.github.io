import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { logosReducer } from "@/redux/reducer/logos/reducer";
import { bannersReducer } from "@/redux/reducer/banners/reducer";
import { areaLayananReducer } from "@/redux/reducer/areaLayanan/reducer";
import { numberLayananReducer } from "@/redux/reducer/numberLayanan/reducer";
import { tentangKamiReducer } from "@/redux/reducer/tentangKami/reducer";
import { layananReducer } from "@/redux/reducer/layanan/reducer";
import { callToActionReducer } from "@/redux/reducer/callToAction/reducer";
import { testimoniReducer } from "@/redux/reducer/testimoni/reducer";
import { kontakKamiReducer } from "@/redux/reducer/kontakKami/reducer";
import { floatingWhatsAppReducer } from "@/redux/reducer/floatingWhatsApp/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
    logos: logosReducer,
    banners: bannersReducer,
    areaLayanan: areaLayananReducer,
    numberLayanan: numberLayananReducer,
    tentangKami: tentangKamiReducer,
    layanan: layananReducer,
    callToAction: callToActionReducer,
    testimoni: testimoniReducer,
    kontakKami: kontakKamiReducer,
    floatingWhatsApp: floatingWhatsAppReducer,
});

export default rootReducer;
