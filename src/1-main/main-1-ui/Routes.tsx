import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../2-authorization/2-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../2-authorization/3-register/register-1-ui/RegisterPage';
import ForgotPage from '../../2-authorization/4-forgot/forgot-1-ui/ForgotPage';
import ProfilePage from "../../6-profile/profile-1-ui/ProfilePage";
import DatePage from '../../4-date/date-1-ui/DatePage';
import ColorPage from "../../5-color/color-1-ui/ColorPage";
// import ModalPage from "../../3-modals/";
import AntShopPage from "../../8-shop/antPages/shop-1-common/AntShopPage";
import OldShopPage from "../../8-shop/oldPages/shop-1-common/OldShopPage";

export const START_GH_PAGES_PATH = '/neko-login-register-forgot';
export const SIGN_IN_PATH = START_GH_PAGES_PATH + '/sign-in';
export const REGISTER_PATH = START_GH_PAGES_PATH + '/register';
export const FORGOT_PATH = START_GH_PAGES_PATH + '/forgot';
export const PROFILE_PATH = START_GH_PAGES_PATH + '/profile';
export const SHOP_PATH = START_GH_PAGES_PATH + '/shop';
export const OLD_SHOP_PATH = START_GH_PAGES_PATH + '/old_shop';
export const MODAL_PATH = START_GH_PAGES_PATH + '/modal';
export const DATE_PATH = START_GH_PAGES_PATH + '/date';
export const COLOR_PATH = START_GH_PAGES_PATH + '/color';

const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={START_GH_PAGES_PATH} render={() => <Redirect to={SIGN_IN_PATH}/>}/>
            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>
            {/*<Route path={MODAL_PATH} render={() => <ModalPage/>}/>*/}
            <Route path={DATE_PATH} render={() => <DatePage/>}/>
            <Route path={COLOR_PATH} render={() => <ColorPage/>}/>
            <Route path={PROFILE_PATH} render={() => <ProfilePage/>}/>
            <Route path={OLD_SHOP_PATH} render={() => <OldShopPage/>}/>
            <Route path={SHOP_PATH} render={() => <AntShopPage/>}/>
        </div>
    );
};

export default Routes;
