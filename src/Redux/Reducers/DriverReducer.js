import { ActionTypes } from "../ActionTypes/ActionTypes";
const DriverReducer = (driver = [], action) => {
  switch (action.type) {
    case ActionTypes.DRIVER_FETCH:
      return action.payload;
    case ActionTypes.DRIVER_CREATE:
      return [...driver, action.payload];
    case ActionTypes.DRIVER_UPDATE:
      return driver.map((driver) =>
        driver._id === action.payload._id ? action.payload : driver
      );
    case ActionTypes.DRIVER_DELETE:
      return driver.filter((driver) => driver._id !== action.payload);
    default:
      return driver;
  }
};
export default DriverReducer;
