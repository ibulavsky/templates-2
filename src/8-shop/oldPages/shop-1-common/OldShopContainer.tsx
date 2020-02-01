import React from 'react';
import ShopSearchPage from "../shop-search/ShopSearchPage";
import ShopSelectedPage from "../shop-page/ShopSelectedPage";
import OldShopProductPage from "../shop-product-table/OldShopProductPage";


interface IPropsShopConatiner {
}

const OldShopContainer: React.FC<IPropsShopConatiner> = () => {

    return (
        <>
            <ShopSearchPage/>
            <OldShopProductPage/>
            <ShopSelectedPage/>
        </>
    );
};


export default OldShopContainer;
