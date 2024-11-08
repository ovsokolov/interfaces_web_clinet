import { FETCH_YEAR, FETCH_MODEL, DEVICE_REMOVED, DEVICE_NOT_SUPPORTED, RESET_SEARCH } from '../utils/constants';

import _ from 'lodash'; // Use ES module import

const DEFAULT_DROPDOWN_VALUE = {id: 0, vehicle_year:"Select Year..."};
let topYear = new Date().getFullYear();
const YEAR_LIST = _.range(1996,topYear+2).reverse().map((i) => {
      return {id: i, vehicle_year:i};
    });

export default function(state = {list: [DEFAULT_DROPDOWN_VALUE]}, action){
  switch (action.type){
    case FETCH_YEAR:
      //return state.concat([ action.payload.data ]);
      //or (same crete new array). NEVER!!!!! mutate array
      return {list: [DEFAULT_DROPDOWN_VALUE, ...YEAR_LIST ]};
    case RESET_SEARCH:
      return {list: [DEFAULT_DROPDOWN_VALUE]};
    case FETCH_MODEL:
      return {list: [DEFAULT_DROPDOWN_VALUE]};
    case DEVICE_REMOVED:
      return {list: [DEFAULT_DROPDOWN_VALUE]};
    case DEVICE_NOT_SUPPORTED:
      return {list: [DEFAULT_DROPDOWN_VALUE]};
  }
  return state;
}
