import React from 'react';
import Paginator from "../shop-paginator/Paginator";
import {useDispatch, useSelector} from 'react-redux';
import {IAppStore} from "../../../1-main/main-2-bll/store";
import {getShop} from "../../shop-2-bll/shopThunks";


const ShopSelectedPage: React.FC = () => {
    const dispatch = useDispatch();
    const productTotalCount = useSelector((store: IAppStore) => store.shop.data.productTotalCount);
    const pageCount = useSelector((store: IAppStore) => store.shop.data.pageCount);
    const page = useSelector((store: IAppStore) => store.shop.data.page);
    const minPrice = useSelector((store: IAppStore) => store.shop.data.minPrice);
    const maxPrice = useSelector((store: IAppStore) => store.shop.data.maxPrice);
    const searchProduct = useSelector((store: IAppStore) => store.shop.data.searchProduct);
    const changePage = (pageNumber: number) => {
        dispatch(getShop(searchProduct,minPrice,maxPrice,pageNumber, pageCount));
    };
    const changePageSize = (pageCount: number) => {
        dispatch(getShop(searchProduct,minPrice,maxPrice,page, pageCount));
    };

    return (
        <div>
            <div>
                <Paginator productTotalCount={productTotalCount} page={page} pageCount={pageCount}
                           changePage={changePage} changePageSize={changePageSize}
                />
            </div>
        </div>
    );
};

export default ShopSelectedPage;



