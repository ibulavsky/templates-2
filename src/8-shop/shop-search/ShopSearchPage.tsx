import React, {useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import {useDispatch, useSelector} from "react-redux";
import {getShop} from '../shop-2-bll/shopThunks';
import {IAppStore} from "../../1-main/main-2-bll/store";
import { searchProductData } from '../shop-2-bll/shopActions';


const ShopSearchPage: React.FC = () => {

    const [search, changeSearchWord] = useState('');
    const [values, setValues] = useState([1000, 5000]);

    const dispatch = useDispatch();
    const productTotalCount = useSelector((store: IAppStore) => store.shop.data.productTotalCount);
    const pageCount = useSelector((store: IAppStore) => store.shop.data.pageCount);
    const page = useSelector((store: IAppStore) => store.shop.data.page);
    const searchProduct = useSelector((store: IAppStore) => store.shop.data.searchProduct);


    const saveSearchWord = (e: any) => {
        changeSearchWord(e.currentTarget.value);
    };

    const setRange = (values: Array<number>) => {
        setValues(values);
    };

    const startSearch = () => {
        // Исправить и уничтожить гавнокод
        dispatch(searchProductData(search));
        dispatch(getShop(search, values[0], values[1]));
        changeSearchWord('')
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100vw',
            height: '100px',
        }}>
            <div>
                <input type="text" placeholder='Product name' onChange={saveSearchWord} value={searchProduct}
                       style={{border: '1px solid blue'}}/>
                <button onClick={startSearch} style={{border: '1px solid blue'}}>Search</button>
            </div>
            <div>
                <PriceRange setRange={setRange}/>
            </div>
        </div>
    );
};

export default ShopSearchPage;


interface IPriceRangeProps {
    setRange: (values: Array<number>) => void
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

export const PriceRange: React.FC<IPriceRangeProps> = ({
                                                           setRange
// loading,// error,// name,// logoutCallback,
                                                       }) => {

    const [values, setValues] = useState([1000, 5000]);

    const onChangeRange = (values: Array<number>) => {
        setValues(values);
        setRange(values)
    };

    return (
        <Range
            values={values}
            step={500}
            min={1000}
            max={5000}
            onChange={(values) => onChangeRange(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '500px',
                        margin: '30px',
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#548BF4', '#ccc'],
                                min: 1000,
                                max: 5000,
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '12px',
                        width: '12px',
                        borderRadius: '1px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#548BF4'
                        }}
                    >
                        {values[index].toFixed(0)}
                        {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
                    </div>
                    <div
                        style={{
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        }}
                    />
                </div>
            )}
        />
    );
};


