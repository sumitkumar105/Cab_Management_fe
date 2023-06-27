import { ActionTypes } from "../ActionTypes/ActionTypes";

import * as api from "../../api/index";
export const getAllDriver = () => async (dispatch) => {
  try {
    const { data } = await api.getAllDriver();
    dispatch({ type: ActionTypes.DRIVER_FETCH, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDriver = (driver) => async (dispatch) => {
  try {
    const { data } = await api.createDriver(driver);
    // console.log("dat...", data);
    dispatch({ type: ActionTypes.DRIVER_CREATE, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDriver = (id, driver) => async (dispatch) => {
  try {
    const { data } = await api.updateDriver(id, driver);

    dispatch({ type: ActionTypes.DRIVER_UPDATE, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDriver = (id) => async (dispatch) => {
  try {
    await api.deleteDriver(id);

    dispatch({ type: ActionTypes.DRIVER_DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
