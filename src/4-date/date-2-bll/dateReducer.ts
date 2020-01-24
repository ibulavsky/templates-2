import {dateInitialState} from "./dateInitialState";
import {IDateActions} from "./dateActions";

export const DATE_ACTION = 'REGISTER/FORGOT-MAIL-ERROR';


export const dateReducer = (state = dateInitialState, action: IDateActions) => {
    switch (action.type) {
        case DATE_ACTION :
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default: {
            return state;
        }
    }
};
