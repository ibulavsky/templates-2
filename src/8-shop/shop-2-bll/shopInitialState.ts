export interface IShopState {
    data: IShopData
}

export interface IShopData {
    products: IShopProduct[]
    minPrice: number
    maxPrice: number
    productTotalCount: number
    page: number
    pageCount: number
    searchProduct: string
}

export interface IShopProduct {
    id: string,
    productName: string,
    price: number
}


export const shopInitialState: IShopState = {
    data: {
        products: [
            {
                id: '0.2342353626',
                productName: 'car1',
                price: 3000,
            },
        ],
        minPrice: 1000,
        maxPrice: 5000,
        productTotalCount: 3,
        page: 1,
        pageCount: 7,
        searchProduct: ''
    }
};
