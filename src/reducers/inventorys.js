import {
  GET_INVENTORY_LIST,
  GET_INVENTORY_DETAIL,
  POST_INVENTORY_CREATE,
  PUT_INVENTORY_EDIT,
  GET_LOGGING_LIST,
} from "../actions/inventoryAction";

let initialState = {
  getInventoryList: false,
  errorInventoryList: false,
  getInventoryDetail: false,
  errorInventoryDetail: false,
  getResponDataInventory: false,
  errorResponDataInventory: false,
  getUserLogin: localStorage.getItem("token") ? true : false,
  errorUserLogin: false,
  getLoggingList: false,
  errorLoggingList: false,
  title: "BARANG INVENTORY PERPASIP",
  judul: "apa hayu",
};

const inventorys = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVENTORY_LIST:
      return {
        ...state,
        getInventoryList: action.payload.data,
        errorInventoryList: action.payload.errorMessage,
      };
    case GET_LOGGING_LIST:
      return {
        ...state,
        getLoggingList: action.payload.data,
        errorLoggingList: action.payload.errorMessage,
      };
    case GET_INVENTORY_DETAIL:
      return {
        ...state,
        getInventoryDetail: action.payload.data,
        errorInventoryDetail: action.payload.errorMessage,
      };

    case POST_INVENTORY_CREATE:
      return {
        ...state,
        getResponDataInventory: action.payload.data,
        errorResponDataInventory: action.payload.errorMessage,
      };

    case PUT_INVENTORY_EDIT:
      return {
        ...state,
        getResponDataInventory: action.payload.data,
        errorResponDataInventory: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default inventorys;
