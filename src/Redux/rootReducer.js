import { combineReducers } from "redux";
import DriverReducer from "./Reducers/DriverReducer";
import CarReducer from "./Reducers/CarReuducer";

const reducers = combineReducers({
  driverData: DriverReducer,
  carData: CarReducer,
});

export default reducers;
