import React, {useEffect, useState} from 'react';
import ModalMessage from "./../ModalMessage/ModalMessage";

interface IModalMessage {
    show: boolean,
    message: () => void,
    styleTop: () => string,
    top: number,
    step: number,
    startTop: number,
    endTop: number,
    time: number,
}

const ModalsUpContainer: React.FC = () => {
        const [show, setShow] = useState(false);
        const [top, changeTop] = useState(-100);
        // const [startTop, changeStartValue] = useState(-50);
        // const [endTop, changeEndValue] = useState(50);
        // const [time, changePause] = useState(2000);
        // const [step, setStep] = useState(10);

        useEffect(() => {
            window.addEventListener('scroll', function () {
                if (window.pageYOffset < 1400) {
                    setShow(false)
                } else {
                    setShow(true)
                }
            });
        }, []);


        // useEffect(() => {
        //     if (show) {
        //         let localStart = startTop;
        //         let localEnd = endTop;
        //         const timer = setInterval(() => {
        //             if (localStart + step > localEnd) {
        //                 setTimeout(() => {
        //                     clearTimeout(timer);
        {/*                    const downMove = setInterval(() => {*/
        }
        {/*                        localStart -= step;*/
        }
        {/*                        changeTop(localStart);*/
        }
        //                         if (localStart < startTop) {
        //                             clearInterval(downMove);
        //                             changeTop(startTop);
        //                             setShow(false);
        //                         }
        //                     }, 30)
        //                 }, time)
        //             } else {
        //                 localStart += step;
        //                 changeTop(localStart)
        //             }
        //         }, 30)
        //     }
        // }, [show]);


        return (

            <div style={{display: "flex",flexDirection: "column", justifyContent: "flex-end", position: 'fixed'}}>
                {show ? <button onClick={() => window.scrollTo(window.pageXOffset, 0)}>Up</button> : <span></span>}
            </div>
        );
    }
;

export default ModalsUpContainer;
