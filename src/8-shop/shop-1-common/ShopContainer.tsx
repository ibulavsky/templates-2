import React from 'react';
import ShopSearchPage from "../shop-search/ShopSearchPage";
import ShopProductPage from "../shop-product-table/ShopProductPage";
import ShopSelectedPage from "../shop-page/ShopSelectedPage";


interface IPropsShopConatiner {
}

const ShopContainer: React.FC<IPropsShopConatiner> = () => {

    return (
        <>
            <ShopSearchPage/>
            <ShopProductPage/>
            <ShopSelectedPage/>
        </>
    );
};


export default ShopContainer;
