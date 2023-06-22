import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
const InputField = ({ label, name, value, onChange, control, register }) => {
  return (
    <Stack dirction="column" spacing={1}>
      <Typography variant="h6">{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            variant="outlined"
            {...register(`${name}`, { required: true })}
            value={value}
            onChange={onChange}
            sx={{ width: "100%", borderColor: "blue" }}
            {...field}
          />
        )}
      />
    </Stack>
  );
};
export default InputField;
