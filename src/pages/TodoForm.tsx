import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loadingPage } from "../redux/loadingSlice";
import { useDispatch } from "react-redux/es/exports";
import { addNewTodo } from "../service/index";


const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [status, setstatus] = useState("");
  const validationSchema = Yup.object({
    name: Yup.string().required("Todo is required!"),
    status: Yup.string().required("Desc is required!"),
  });
  

  const formik = useFormik({
    initialValues: {name: name, status: status},
    validationSchema: validationSchema,
    onSubmit: (values: object) => {
      handleAddTodo(values);
    },
  });
  const handleAddTodo = async (values: object) => {
    try {
      const res = await addNewTodo({ ...values });
      if (res) {
        dispatch(loadingPage());
        setname("");
        setstatus("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-red-300 rounded-md">
      <div className="my-4">
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mx-4 my-2 col-span-1">
              <TextField
                fullWidth
                size="small"
                id="name"
                label="Add new Todo"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
              <span>{formik.touched.name && formik.errors.name}</span>
            </div>
            <div className="mx-4 my-2 col-span-1">
              <TextField
                fullWidth
                size="small"
                id="status"
                label="Status"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.status}
                error={
                  formik.touched.status &&
                  Boolean(formik.errors.status)
                }
              />
              <span>
                {formik.touched.status && formik.errors.status}
              </span>
            </div>
          </div>
          <div className="mx-4 my-2 w-1/5 flex flex-row gap-4">
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
            <Button color="warning" variant="contained" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
