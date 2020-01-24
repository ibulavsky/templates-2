import {profileInitialState} from "./profileInitialState";
import {IProfileActions} from "./profileActions";

export const profileReducer = (state = profileInitialState, action: IProfileActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
