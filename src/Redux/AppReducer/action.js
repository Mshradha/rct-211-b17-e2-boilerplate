//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

const getShoesDataRequest = () => {
  return { type: types.GET_SHOES_DATA_REQUEST };
};
const getShoesDataSucces = (payload) => {
  return { type: types.GET_SHOES_DATA_SUCCESS, payload };
};
const getShoesDataFailure = (error) => {
  return { type: types.GET_SHOES_DATA_FAILURE, payload: error };
};

const getData = () => (dispatch) => {
  dispatch(getShoesDataRequest());
  axios
    .get("/shoes")
    .then((res) => dispatch(getShoesDataSucces(res.data)))
    .catch((error) => dispatch(getShoesDataFailure(error)));
};

export {
  getData,
  getShoesDataFailure,
  getShoesDataRequest,
  getShoesDataSucces,
};
