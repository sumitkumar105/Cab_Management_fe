import axios from "axios";

// const url = "https://pts-node-backend.herokuapp.com/";
const url = "http://localhost:9000/";

// =================== Driver API =================
export const createDriver = (driver) => axios.post(``, driver);
export const getAllDriver = () => axios.get(`${url}`);
export const updateDriver = (id, updatedDriver) =>
  axios.patch(``, updatedDriver);
export const deleteDriver = (id) => axios.delete(``);
export const getParticularDriver = (id) => axios.get(``);

// =================== Car API =================
export const createCar = (Car) => axios.post(``, Car);
export const getAllCar = () => axios.get(`${url}`);
export const updateCar = (id, updatedCar) => axios.patch(``, updatedCar);
export const deleteCar = (id) => axios.delete(``);
export const getParticularCar = (id) => axios.get(``);
