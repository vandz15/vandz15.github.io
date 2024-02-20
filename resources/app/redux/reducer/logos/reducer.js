import { initialState } from "@/redux/action/logos/state";
import { actionType } from "@/redux/action/logos/type";

export const logosReducer = (state = initialState, action) => {
    switch (action.type) {
        // Read
        case actionType.loadLogos:
            state = {
                ...state,
                logosList: action.payload,
            };
            return state;
        case actionType.loadLogosResetData:
            return initialState;
        default:
            return state;
    }
};

export default logosReducer;
