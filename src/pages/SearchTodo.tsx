import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadingSearchList, selectTodoList } from "../redux/todoSlice";

function SearchTodo() {
  const dispatch = useDispatch();
  const listTodo = useSelector(selectTodoList);
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const filterSearch = () => {
    let result = [...listTodo];
    if (searchName) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if(searchStatus){
      result = result.filter((item) =>
        item.status.toLowerCase().includes(searchStatus.toLowerCase())
      );
    }
    console.log(result);
    dispatch(loadingSearchList(result));
  };
  const cancelSearch = () => {
    setSearchName("");
    setSearchStatus("");
    dispatch(loadingSearchList([]));
  }
  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row gap-2 px-auto">
        <div className="w-4/5 md:w-1/4">
          <TextField
            fullWidth
            size="small"
            id="name"
            label="Search name"
            variant="outlined"
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
        </div>
        <div className="w-4/5 md:w-1/4">
          <TextField
            fullWidth
            size="small"
            id="name"
            label="Search status"
            variant="outlined"
            value={searchStatus}
            onChange={(e) => {
              setSearchStatus(e.target.value);
            }}
          />
        </div>
        <div className="w-[10%]">
          <Button color="primary" variant="contained" onClick={filterSearch}>
            Search
          </Button>
        </div>
        <div className="w-[10%]">
          <Button color="secondary" variant="contained" onClick={cancelSearch}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchTodo;
