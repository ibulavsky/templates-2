import React from 'react';

interface IObjectStyle {
    width: string
}

interface IButtonProps {
    name: string
    onClickEvent: () => void
    style: IObjectStyle
}

export const Button: React.FC<IButtonProps> = ({name, onClickEvent, style}) => {
    return (
        <span style={{...style}}>
        <button style={{width: '100%'}} onClick={() => onClickEvent()}> {name} </button>
        </span>
    );
};




