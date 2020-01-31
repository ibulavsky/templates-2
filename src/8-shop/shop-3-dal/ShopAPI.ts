import axios from 'axios';
import {baseURL} from "../../base-url";
import {INum, IStr} from "../shop-2-bll/shopThunks";


const instance = axios.create({
    baseURL
});

export const ShopAPI = {
    getShopData(product: IStr, minPrice: INum, maxPrice: INum, currentPage: INum, pageCount: INum, sort: IStr) {
        return instance.get(`shop/?productName=${product}&min=${minPrice}&max=${maxPrice}&sortProducts=${sort}&page=${currentPage}&pageCount=${pageCount}`,)
    },
    addProduct(productName: string, price: number) {
        return instance.post(`shop/`, {product: {productName, price}})
    },
    updateProduct(id: number, productName: string, price: number) {
        return instance.put(`shop/`, {product:{id, productName, price}})
    },
    deleteProduct(id: number) {
        return instance.delete(`shop/?id=${id}`)
    },
};
