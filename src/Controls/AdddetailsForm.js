import React, { useState } from "react";

import { Modal, Button, Typography, Paper, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import CloseIcon from "@mui/icons-material/Close";
import ErrorMessage from "./ErroMessage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};
const AdddetailsForm = (props) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const { open, setOpen, type } = props;
  const initialValuesDriver = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  const initialValuesCar = {
    regNo: "",
    model: "",
    color: "",
  };
  const [data, setData] = useState(
    type === "DRIVER" ? initialValuesDriver : initialValuesCar
  );
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handelClose = () => {
    setOpen(false);
  };
  console.log("checking data==>>>>", data);
  const onSubmit = (data) => console.log("from library");
  return (
    <>
      <Modal
        open={open}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style} elevation={3}>
          <Stack
            direction="column"
            justifyContent="center"
            // alignItems="center"
            spacing={1}
          >
            <Stack dirction="row" alignItems="flex-end">
              <CloseIcon sx={{ cursor: "pointer" }} onClick={handelClose} />
            </Stack>
            <Typography textAlign="center" variant="h5">
              ADD {type}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              {type === "DRIVER" ? (
                <>
                  <InputField
                    label={"Driver ID: "}
                    name={"id"}
                    value={data.id}
                    control={control}
                    register={register}
                    onChange={handleChange}
                  />
                  {errors.id && data.id === "" && <ErrorMessage name="Id" />}
                  <InputField
                    label={"Driver Name: "}
                    name={"name"}
                    control={control}
                    register={register}
                    value={data.name}
                    onChange={handleChange}
                  />
                  {errors.name && data.name === "" && (
                    <ErrorMessage name="Name" />
                  )}
                  <InputField
                    label={"Driver email: "}
                    name={"email"}
                    control={control}
                    register={register}
                    value={data.email}
                    onChange={handleChange}
                  />
                  {errors.email && data.email === "" && (
                    <ErrorMessage name="Email" />
                  )}
                  <InputField
                    label={"Driver Phone: "}
                    name={"phone"}
                    control={control}
                    register={register}
                    value={data.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && data.phone === "" && (
                    <ErrorMessage name="Phone" />
                  )}
                </>
              ) : (
                <>
                  {" "}
                  <InputField
                    label={"Car RegNo: "}
                    name={"regNo"}
                    control={control}
                    register={register}
                    value={data.regNo}
                    onChange={handleChange}
                  />
                  {errors.regNo && data.regNo === "" && (
                    <ErrorMessage name="Register No" />
                  )}
                  <InputField
                    label={"Car Model: "}
                    name={"model"}
                    control={control}
                    register={register}
                    value={data.model}
                    onChange={handleChange}
                  />
                  {errors.model && data.model === "" && (
                    <ErrorMessage name="Model" />
                  )}
                  <InputField
                    label={"Car Color: "}
                    name={"color"}
                    control={control}
                    register={register}
                    value={data.color}
                    onChange={handleChange}
                  />
                  {errors.color && data.color === "" && (
                    <ErrorMessage name="Color" />
                  )}
                </>
              )}

              <Stack
                direction="row"
                justifyContent="center"
                sx={{ marginTop: "20px" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "110%" }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};
export default AdddetailsForm;
