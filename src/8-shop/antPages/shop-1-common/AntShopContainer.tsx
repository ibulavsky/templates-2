import React from 'react';
import ShopSearchPage from "../../oldPages/shop-search/ShopSearchPage";
import AntShopProductPage from "../shop-product-table/AntShopProductPage";
import ShopSelectedPage from "../../oldPages/shop-page/ShopSelectedPage";


interface IPropsShopConatiner {
}

const AntShopContainer: React.FC<IPropsShopConatiner> = () => {

    return (
        <>
            <ShopSearchPage/>
            <AntShopProductPage/>
            <ShopSelectedPage/>
        </>
    );
};


export default AntShopContainer;
