import { ActionTypes } from "../ActionTypes/ActionTypes";
const CarReducer = (car = [], action) => {
  switch (action.type) {
    case ActionTypes.CAR_FETCH:
      return action.payload;
    case ActionTypes.CAR_CREATE:
      return [...car, action.payload];
    case ActionTypes.CAR_UPDATE:
      return car.map((car) =>
        car._id === action.payload._id ? action.payload : car
      );
    case ActionTypes.CAR_DELETE:
      return car.filter((car) => car._id !== action.payload);
    default:
      return car;
  }
};
export default CarReducer;
