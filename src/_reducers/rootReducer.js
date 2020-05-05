import {alert} from './alertreducer';
import {authentication} from './authenticationreducer';
import {users} from './usersreducer';
import { combineReducers } from 'redux';
import shop from './shop.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    alert,
    authentication,
    users,
    shop,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
    
  });