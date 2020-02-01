import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    COLOR_PATH,
    DATE_PATH,
    FORGOT_PATH,
    PROFILE_PATH,
    REGISTER_PATH,
    SIGN_IN_PATH,
    MODAL_PATH,
    SHOP_PATH,
    OLD_SHOP_PATH
} from './Routes';

const Header: React.FC = () => {
    const [showOld, setShowOld] = useState(false);
    const [showAnt, setShowAnt] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <button style={{width: '145px'}}
                    onClick={() => setShowOld(!showOld)}>{showOld ? 'hide OldDev header' : 'show OldDev header'}</button>
                {showOld &&
                <div style={{
                    display: 'flex',
                    width: '100vh',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
                    <NavLink to={REGISTER_PATH}>register</NavLink>
                    <NavLink to={FORGOT_PATH}>forgot</NavLink>
                    <NavLink to={PROFILE_PATH}>profile</NavLink>
                    <NavLink to={DATE_PATH}>date</NavLink>
                    <NavLink to={COLOR_PATH}>color</NavLink>
                    {/*<NavLink to={MODAL_PATH}>modal</NavLink>}*/}
                    <NavLink to={OLD_SHOP_PATH}>shop</NavLink>
                </div>
                }
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <button style={{width: '145px'}}
                    onClick={() => setShowAnt(!showAnt)}>{showAnt ? 'hide AntDev header' : 'show AntDev header'}</button>
                {showAnt &&
                <div style={{
                    display: 'flex',
                    width: '100vh',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <NavLink to={SHOP_PATH}>shop</NavLink>
                </div>}
            </div>

        </div>
    );
};

export default Header;
