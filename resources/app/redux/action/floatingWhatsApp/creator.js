import { actionType } from "@/redux/action/floatingWhatsApp/type";

// Data Json
import DataFloatingWhatsApp from "./data-floating-whatsApp.json";

// Read
export const getListFloatingWhatsApp = () => {
    return (dispatch) => {
        return dispatch(saveListFloatingWhatsApp(DataFloatingWhatsApp[0]));
    };
};

// Read
export const saveListFloatingWhatsApp = (payload) => {
    return {
        type: actionType.loadFloatingWhatsApp,
        payload: payload,
    };
};
