import React from 'react';
import styles from './ModalForm.module.css'

interface IModal {
    children: any,
    show: boolean,
    blackout: boolean,
    top?: number
}


const ModalForm: React.FC<IModal> = ({children, show, blackout, top}) => {

    if (!show) return null;

    return (
        <>
            {blackout && <div className={styles.blackout}> </div>}
            <div className={styles.form}>
                {children}
            </div>
        </>
    );
};

export default ModalForm;
