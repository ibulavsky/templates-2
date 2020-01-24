import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {SIGN_IN_PATH} from "../../1-main/main-1-ui/Routes";
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getMe} from "../profile-2-bll/profileThunks";
import {getCookie, setCookie} from "../../7-helpers/cookies/cookies";
import {IAppStore} from '../../1-main/main-2-bll/store';
import {profileSetName} from '../profile-2-bll/profileActions';

const ProfileContainer: React.FC = () => {
    const [redirect, setRedirect] = useState(false);
    const name = useSelector((store: IAppStore) => store.profile.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe())
    }, []);

    useEffect(() => {
        if (!getCookie('token')) {
            setRedirect(true);
        }
    }, [name]);


    const logoutCallback = () => {
        setCookie('token', '', -1000);
        dispatch(profileSetName(''));
    };


    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }
    return (
        <div>
            <Profile name={name} logoutCallback={logoutCallback}/>
        </div>
    );
};

export default ProfileContainer;
