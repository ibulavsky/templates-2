import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../1-main/main-2-bll/store";
import {getShopData, IShopActions} from "./shopActions";
import {ShopAPI} from "../shop-3-dal/ShopAPI";


type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export type INum = number | undefined;
export type IStr = string | undefined;

export const getShop = (searchProduct: IStr = '', minPrice: INum = 1000, maxPrice: INum = 5000, currentPage: INum = undefined, pageCount: INum = undefined, sort: IStr = undefined): ThunkAction<Return, IAppStore, ExtraArgument, IShopActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IShopActions>, getStore: IGetStore) => {
        const response = await ShopAPI.getShopData(searchProduct, minPrice, maxPrice, currentPage, pageCount, sort);
        console.log(response);
        dispatch(getShopData(response.data));
    };

export const addProduct = (name: string, price: number): ThunkAction<Return, IAppStore, ExtraArgument, IShopActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IShopActions>, getStore: IGetStore) => {
        const response = await ShopAPI.addProduct(name, price);
        console.log(response);
        await dispatch(getShop());
    };
export const updateProduct = (id: number, name: string, price: number): ThunkAction<Return, IAppStore, ExtraArgument, IShopActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IShopActions>, getStore: IGetStore) => {
        const response = await ShopAPI.updateProduct(id, name, price);
        console.log(response);
        await dispatch(getShop());
    };
export const deleteProduct = (id: number): ThunkAction<Return, IAppStore, ExtraArgument, IShopActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IShopActions>, getStore: IGetStore) => {
        const response = await ShopAPI.deleteProduct(id);
        console.log(response);
        await dispatch(getShop());
    };

// export const shop = (): ThunkAction<Return, IAppStore, ExtraArgument, IShopActions> =>
//     async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IShopActions>, getStore: IGetStore) => {
//     //     dispatch(addBoolean({name: REGISTER_IS_LOADING, value: true}));
//     //     const response = await RegisterAPI.getSuccessRegister(email, passwordCoding(passwordFirst));
//     //     dispatch(addBoolean({name: REGISTER_IS_LOADING, value: false}));
//     //     if (response.data.success) {
//     //         dispatch(addBoolean({name: REGISTER_SUCCESS, value: true}));
//     //     } else {
//     //         dispatch(addBoolean({name: REGISTER_ERROR, value: true, message: response.data.error}))
//     //     }
//     };
