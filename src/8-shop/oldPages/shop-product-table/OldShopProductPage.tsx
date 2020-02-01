import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, getShop, updateProduct, deleteProduct} from "../../shop-2-bll/shopThunks";
import AddedProductModal from "./table/modals/AddedForm";
import ProductDeleteModal from "./table/modals/QuestionForm";
import UpdateProductModal from "./table/modals/UpdatedForm";
import Table from './table/Table';
import {Button} from './table/TableElements';
import {IAppStore} from "../../../1-main/main-2-bll/store";
import '../../../App.css';

const OldShopProductPage: React.FC = () => {

    const dispatch = useDispatch();
    const [colorButtonSort, changeColorSort] = useState(true);
    const productsData = useSelector((store: IAppStore) => store.shop.data.products);

    //  callbacks
    const onAddProduct = (name: string, price: number) => {
        dispatch(addProduct(name, price))
    };
    const onUpdateProduct = (id: number, name: string, price: number) => {
        dispatch(updateProduct(id, name, price))
    };

    const onDeleteProduct = (id: number) => {
        dispatch(deleteProduct(id))
    };
    const onAddToCart = () => {
        alert('add to Cart')
    };

    const onClickSort = (status: boolean) => {
        changeColorSort(status)
    };


    useEffect(() => {
        dispatch(getShop());
    }, []);

    const model = [
        {
            title: (i: number) => <div key={i} style={{width: '30%'}}> Product </div>,
            render: (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                                   style={{width: '30%'}}> {dataItem.productName}</div>
        },
        {
            title: (i: number) => <div key={i} style={{width: '35%'}}><span>Price</span>
                <div>
                    <button style={{backgroundColor: colorButtonSort === true ? 'blue' : 'white'}}
                            onClick={() => onClickSort(true)}>Big
                    </button>
                    <button style={{backgroundColor: colorButtonSort === false ? 'blue' : 'white'}}
                            onClick={() => onClickSort(false)}>Small
                    </button>
                </div>
            </div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                               style={{width: '35%'}}> {dataItem.price} </div>
        },
        {
            title: (i: number) => <div style={{width: '15%', textAlign: 'center'}}><AddedProductModal key={i}
                                                                                                      title='Add'
                                                                                                      setProduct={(name, price) => {
                                                                                                          onAddProduct(name, price)
                                                                                                      }}
                                                                                                      style={{width: '15%'}}/>
            </div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex} style={{
                    width: '15%',
                    textAlign: 'center'
                }}>
                    <UpdateProductModal key={modelIndex} title="Update" name={dataItem.productName}
                                        price={dataItem.price}
                                        setProduct={(name, price) => onUpdateProduct(dataItem.id, name, price)}
                                        style={{width: '7.5%'}}/>
                    <ProductDeleteModal id={dataItem.id} title='Delete' style={{width: '7.5%'}}
                                        deleteProduct={(id) => onDeleteProduct(id)}/>
                </div>
        },
        {
            title: (i: number) => <div key={i} style={{width: '10%', textAlign: 'center'}}><a href={'#'}>Cart</a></div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <>
                    <Button key={modelIndex} name="Add to Cart" onClickEvent={() => onAddToCart()}
                            style={{width: '10%'}}/>
                </>
        }
    ];

    return (<>
            <Table
                model={model}
                data={productsData}
            />
        </>
    )
};

export default OldShopProductPage;
