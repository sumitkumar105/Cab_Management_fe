import { ActionTypes } from "../ActionTypes/ActionTypes";

import * as api from "../../api/index";
export const getAllCar = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCar();
    dispatch({ type: ActionTypes.CAR_FETCH, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCar = (driver) => async (dispatch) => {
  try {
    const { data } = await api.createCar(driver);
    // console.log("dat...", data);
    dispatch({ type: ActionTypes.CAR_CREATE, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCar = (id, driver) => async (dispatch) => {
  try {
    const { data } = await api.updateCar(id, driver);

    dispatch({ type: ActionTypes.CAR_UPDATE, payload: data.response });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    await api.deleteCar(id);

    dispatch({ type: ActionTypes.CAR_DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
