import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../1-main/main-2-bll/store";
import {IProfileActions, profileSetName} from "./profileActions";
import {ISignInActions} from "../../2-sign-in/sign-in-2-bll/signInActions";
import { getCookie, setCookie } from "../../5-helpers/cookies/cookies";
import {ProfileAPI} from "../profile-3-dal/ProfileAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, IProfileActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IProfileActions | ISignInActions>, getStore: IGetStore) => {

        const token = getCookie('token') || '';
        try {
            const data = await ProfileAPI.getMe(token);
            console.log(data);
            if (data.error) {
                setCookie('token', '', -1000); // почему отрицательный?, а не скажем 0.
            } else {
                setCookie('token', data.token, 60 * 60 * 48); //cookie age is 2 days
                dispatch(profileSetName(data.name));
            }
        } catch (e) {

        }
    };
