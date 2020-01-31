import React, {useState} from 'react';
import ModalForm from "./ModalForm";

interface IObjectStyle {
    width: string
}

interface IModalQuestionProps {
    id: number
    title: string
    style: IObjectStyle
    deleteProduct: (id: number) => void
}

const ProductDeleteModal: React.FC<IModalQuestionProps> = ({id, style, title, deleteProduct}) => {
    const [show, setShow] = useState(false);
    const onSubmit = () => {
        deleteProduct(id);
        setShow(false);
    };

    const onExit = () => {
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)}>{title}</button>
            <ModalForm show={show} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <span>Delete Product: </span>
                    <button onClick={() => onSubmit()}>YES</button>
                    <button onClick={() => onExit()}>NO</button>
                </div>
            </ModalForm>
        </>
    );
};

export default ProductDeleteModal;
