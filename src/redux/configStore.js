import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import { baiTapGameXucXacReducer } from './Reducers/baiTapGameXucXacReducer';
import { baiTapQuanLyNguoiDungReducer } from './Reducers/baiTapQuanLyNguoiDungReducer';
import { carDetailReducer } from './Reducers/carDetailReducer';
import { FakeBookAppReducer } from './Reducers/FakeBookAppReducer';
import { gioHangReducer } from './Reducers/gioHangReducer';
import { productDetailReducer } from './Reducers/productDetailReducer';
import { toDoListReducer } from './Reducers/toDoListReducer';

import reduxThunk from 'redux-thunk';
import { modalReducer } from './Reducers/modalReducer';

const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    carDetailReducer,
    productDetailReducer,
    gioHangReducer,
    baiTapGameXucXacReducer,
    baiTapQuanLyNguoiDungReducer,
    FakeBookAppReducer,
    toDoListReducer,
    modalReducer
});

let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer,composeCustom);
