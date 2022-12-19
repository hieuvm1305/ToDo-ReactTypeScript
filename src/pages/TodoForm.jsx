import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { addTodo } from "../services";
import * as Yup from "yup";

function TodoForm() {
  const validationSchema = Yup.object({
    todo: Yup.string().required("Todo is required!"),
    description: Yup.string().required("Status is required!"),
  });

  const formik = useFormik({
    initialValues: 1,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className="px-auto">
          <div className="flex flex-row md:flex-row gap-3">
            <div className="w-4/5 md:w-2/5">
              <TextField
                id="outlined-basic"
                label="Add new"
                size="small"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="w-4/5 md:w-2/5">
              <TextField
                id="outlined-basic"
                label="Add new"
                size="small"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.status}
                helperText={formik.touched.status && formik.errors.status}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="" variant="contained" color="primary" type="submit">Submit</Button>
            <Button variant="contained" color="warning" type="reset">Reset</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
