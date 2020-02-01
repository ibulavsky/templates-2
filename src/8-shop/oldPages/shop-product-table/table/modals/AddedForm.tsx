import React, {useState} from 'react';
import ModalForm from "./ModalForm";

interface IObjectStyle {
    width: string
}

interface IModalProps {
    setProduct: (name: string, price: number) => void
    title: string
    style: IObjectStyle
}

const AddedProductModal: React.FC<IModalProps> = ({setProduct, title, style}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("Car");
    const [price, setPrice] = useState(5000);

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
                    <input type="text" placeholder='Product name' onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}/>
                    <input type="text" placeholder='Price' onChange={(e) => {
                        setPrice(+e.currentTarget.value)
                    }}/>
                    <button onClick={() => onSubmit()}>Ok</button>
                    <button onClick={() => setShow(false)}>Exit</button>
                </div>
            </ModalForm>
        </>
    );
};

export default AddedProductModal;
