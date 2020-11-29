import axios from "axios";

export const GET_INVENTORY_LIST = "GET_INVENTORY_LIST";
export const GET_INVENTORY_DETAIL = "GET_INVENTORY_DETAIL";
export const POST_INVENTORY_CREATE = "POST_INVENTORY_CREATE";
export const PUT_INVENTORY_EDIT = "PUT_INVENTORY_EDIT";
export const GET_LOGGING_LIST = 'GET_LOGGING_LIST';

let url = "https://smpnapi.herokuapp.com/api/v3/";
let header = {
  headers: {
    Authorization: `JWT ${localStorage.getItem('token')}`
  }
}

export const getInventoryList = () => {
  return (dispatch) => {
    axios
      .get(url + 'inventory/', header)
      .then(function (response) {
        dispatch({
          type: GET_INVENTORY_LIST,
          payload: {
            data: response.data.Inventory,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_INVENTORY_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const getLoggingList = () => {
  return (dispatch) => {
    axios
      .get(url + 'logging/', header)
      .then(function (response) {
        dispatch({
          type: GET_LOGGING_LIST,
          payload: {
            data: response.data.logging,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_LOGGING_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const getInventoryDetail = (logical_uid) => {
  return (dispatch) => {
    axios
      .get(url + 'inventory/detail/' +  logical_uid, header)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: GET_INVENTORY_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_INVENTORY_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postInventoryCreate = (data) => {
  return (dispatch) => {
    axios
      .post(url + 'inventory/',data,header)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_INVENTORY_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_INVENTORY_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteInventory = (logical_uid) => {
  return (dispatch) => {
    axios
      .delete(url + 'inventory/' + logical_uid, header)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataInventory = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INVENTORY_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_INVENTORY_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const putInventoryUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(url + 'inventory/' + id, data, header)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_INVENTORY_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_INVENTORY_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
