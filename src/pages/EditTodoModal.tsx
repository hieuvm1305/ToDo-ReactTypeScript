/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Modal, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { editTodo } from "../service";
import { loadingPage } from "../redux/loadingSlice";
import { loadingSearchList } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

interface Todo {
  editItem: {
    name: string;
    status: string;
    id: string;
  };
  // editItem: object,
  isOpen: boolean;
  hide: Function;
}
const EditTodoModal = ({ editItem, isOpen, hide }: Todo) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [name, setname] = useState("");
  const [status, setstatus] = useState("");
  const dispatch = useDispatch();

  // // yup
  // const validationSchema = yup.object({
  //   name: yup.string().required("Todo is required!"),
  //   status: yup.string().required("Desc is required!"),
  // });
  // // // formik
  // const formik = useFormik({
  //   initialValues : {
  //     name: name,
  //     status: status
  //   },
  //   validationSchema : validationSchema,
  //   onSubmit : (values : object) => {
  //     handleSubmit(values);
  //   }
  // })
  // update value
  useEffect(() => {
    setname(editItem.name);
    setstatus(editItem.status);
    return () => {};
  }, [editItem]);

  const handleSubmit = async () => {
    try {
      let data: object = { name: name, status: status };
      const res = await editTodo(editItem.id, data);
      if (res) {
        dispatch(loadingSearchList([]));
        dispatch(loadingPage());
        hide();
      }
    } catch (error) {}
  };

  const clearForm = () => {
    setname("");
    setstatus("");
  };
  return (
    <div>
      <Modal open={isOpen} onClose={() => hide()}>
        <Box sx={style}>
          <form onSubmit={handleSubmit} onReset={clearForm}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mx-4 my-2 col-span-1">
                <TextField
                  fullWidth
                  size="small"
                  id="name"
                  label="Edit Todo"
                  variant="outlined"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                  // error={Boolean(formik.errors.name) && formik.touched.name}
                  // helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="mx-4 my-2 col-span-1">
                <TextField
                  fullWidth
                  size="small"
                  id="status"
                  label="Description"
                  variant="outlined"
                  onChange={(e) => {
                    setstatus(e.target.value);
                  }}
                  value={status}
                  // error={Boolean(formik.errors.status) && formik.touched.status}
                  // helperText={formik.touched.status && formik.errors.status}
                />
              </div>
            </div>
            <div className="mx-4 my-2 w-1/5 flex flex-row gap-4">
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button color="warning" variant="contained" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTodoModal;
