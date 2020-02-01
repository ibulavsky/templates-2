import React, {useEffect, useState} from 'react';
// import Table from "./table/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../1-main/main-2-bll/store";
import {addProduct, getShop, updateProduct, deleteProduct} from "../../shop-2-bll/shopThunks";
import AddedProductModal from "../../oldPages/shop-product-table/table/modals/AddedForm";
import ProductDeleteModal from "../../oldPages/shop-product-table/table/modals/QuestionForm";
import UpdateProductModal from "../../oldPages/shop-product-table/table/modals/UpdatedForm";
import {Table, Button} from "antd";
import '../../../App.css';
import {IShopProduct} from "../shop-2-bll/shopInitialState";

const AntShopProductPage: React.FC = () => {

    const productsData = useSelector((store: IAppStore) => store.shop.data.products);

    const [colorButtonSort, changeColorSort] = useState(true);

    const dispatch = useDispatch();

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

    // const model = [
    //     {
    //         title: (i: number) => <div key={i} style={{width: '30%'}}> Product </div>,
    //         render: (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
    //                                                                                style={{width: '30%'}}> {dataItem.productName}</div>
    //     },
    //     {
    //         title: (i: number) => <div key={i} style={{width: '35%'}}><span>Price</span>
    //             <div>
    //                 <button style={{backgroundColor: colorButtonSort === true ? 'blue' : 'white'}}
    //                         onClick={() => onClickSort(true)}>Big
    //                 </button>
    //                 <button style={{backgroundColor: colorButtonSort === false ? 'blue' : 'white'}}
    //                         onClick={() => onClickSort(false)}>Small
    //                 </button>
    //             </div>
    //         </div>,
    //         render:
    //             (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
    //                                                                            style={{width: '35%'}}> {dataItem.price} </div>
    //     },
    //     {
    //         title: (i: number) => <div style={{width: '15%', textAlign: 'center'}}><AddedProductModal key={i}
    //                                                                                                   title='Add'
    //                                                                                                   setProduct={(name, price) => {
    //                                                                                                       onAddProduct(name, price)
    //                                                                                                   }}
    //                                                                                                   style={{width: '15%'}}/>
    //         </div>,
    //         render:
    //             (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex} style={{
    //                 width: '15%',
    //                 textAlign: 'center'
    //             }}>
    //                 <UpdateProductModal key={modelIndex} title="Update" name={dataItem.productName}
    //                                     price={dataItem.price}
    //                                     setProduct={(name, price) => onUpdateProduct(dataItem.id, name, price)}
    //                                     style={{width: '7.5%'}}/>
    //                 <ProductDeleteModal id={dataItem.id} title='Delete' style={{width: '7.5%'}}
    //                                     deleteProduct={(id) => onDeleteProduct(id)}/>
    //             </div>
    //     },
    //     {
    //         title: (i: number) => <div key={i} style={{width: '10%', textAlign: 'center'}}><a href={'#'}>Cart</a></div>,
    //         render:
    //             (dataItem: any, modelIndex: number, dataIndex: number) => <>
    //                 <Button key={modelIndex} name="Add to Cart" onClickEvent={() => onAddToCart()}
    //                         style={{width: '10%'}}/>
    //             </>
    //     }
    // ];


    const sortNumber = (a: IShopProduct, b: IShopProduct) => a.price - b.price;

    const columns = [
            {
                title: 'Product',
                dataIndex: 'productName',
                key: 'id',
                className: 'columnName'
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'id',
                className: 'columnPrice',
                sorter: sortNumber
            },
            {
                title: <span>
                    <Button style={{width: '98px'}}>Add</Button>
                </span>,
                render: () => (
                    <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                <Button style={{margin: '5px 0'}}>Update</Button>
                <Button style={{margin: '5px 0'}}>Delete</Button>
                </span>),
                key: 'id',
            },
        ]
    ;

    const [selectedRowKeys, rowKeysChange] = useState([]);

    const onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        rowKeysChange(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (<>
            {/*old custom Table*/}
            {/*<Table*/}
            {/*    model={model}*/}
            {/*    data={productsData}*/}
            {/*/>*/}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Table rowSelection={rowSelection} dataSource={productsData} columns={columns}/>
            </div>
        </>
    )
};

export default AntShopProductPage;
