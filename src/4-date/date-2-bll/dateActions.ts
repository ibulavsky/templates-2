import {DATE_ACTION} from "./dateReducer";

interface ISomeAction {
    type: typeof DATE_ACTION,
    errorMessage: string
}

export type IDateActions= ISomeAction;

export const forgotMailError = (errorMessage: string) => {
    return {
        // type: FORGOT_MAIL_ERROR, errorMessage
    }
};
