import { initialState } from "@/redux/action/floatingWhatsApp/state";
import { actionType } from "@/redux/action/floatingWhatsApp/type";

export const floatingWhatsAppReducer = (state = initialState, action) => {
    switch (action.type) {
        // Read
        case actionType.loadFloatingWhatsApp:
            state = {
                ...state,
                floatingWhatsAppList: action.payload,
            };
            return state;
        case actionType.loadFloatingWhatsAppResetData:
            return initialState;
        default:
            return state;
    }
};

export default floatingWhatsAppReducer;
