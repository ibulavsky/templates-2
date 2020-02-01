import React, {useState} from 'react';
import ModalForm from "./ModalForm";

interface IObjectStyle {
    width: string
}

interface IModalProps {
    setProduct: (name: string, price: number) => void
    title: string
    style: IObjectStyle
    name: string
    price: number
}

const UpdateProductModal: React.FC<IModalProps> = ({setProduct, title, style, ...props}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const onSubmit = () => {
        setProduct(name, price);
        setShow(false)
    };

    return (
        <>
            <button onClick={() => setShow(true)}>{title}</button>
            <ModalForm show={show} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    Product:
                    <input type="text" placeholder='Product name' value={name} onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}/>
                    <input type="text" placeholder='Price' value={price} onChange={(e) => {
                        setPrice(+e.currentTarget.value)
                    }}/>
                    <button onClick={() => onSubmit()}>Ok</button>
                    <button onClick={() => setShow(false)}>Exit</button>
                </div>
            </ModalForm>
        </>
    );
};

export default UpdateProductModal;
