import {shopInitialState} from "./shopInitialState";
import { GET_SHOP_DATA, IShopActions, SEARCH_PRODUCT_DATA,} from "./shopActions";


export const shopReducer = (state = shopInitialState, action: IShopActions) => {
    switch (action.type) {
        case GET_SHOP_DATA:
            return {
                ...state,
                data: action.data
            };
        case SEARCH_PRODUCT_DATA :
            return {
                ...state,
                searchProduct: action.searchProduct
            };
        // case CHANGE_PAGE:
        //     return {
        //         ...state,
        //         numberPage: action.numberPage
        //     };
        default: {
            return state;
        }
    }
};

