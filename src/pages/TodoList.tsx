import React, { useState, useEffect } from "react";
import { getTodoList, deleteTodo } from "../service";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { loadingPage, selectLoading } from "../redux/loadingSlice";
import { selectSearchList, loadingList, selectTodoList } from "../redux/todoSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EditTodoModal from "./EditTodoModal";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const isLoading = useSelector(selectLoading);
  const [perPage, setperPage] = useState(5);
  const dispatch = useDispatch();
  const searchList = useSelector(selectSearchList);
  const listTodo = useSelector(selectTodoList);

  const [editTask, seteditTask] = useState({
    id: '0',
    name: '',
    status: '',
  });
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await getTodoList();
        if (response) {
          dispatch(loadingList(response.data))
        }
      } catch (error) {
        console.error(error);
      }
    };
    getList();
    return () => {};
  }, [dispatch, isLoading]);
  
  useEffect(() => {
    if(searchList.length){
      setTodoList(searchList);
    } else {
      setTodoList(listTodo);
    }
    return () => {
    }
  }, [listTodo, searchList, isLoading])
  
  const handleDeleteTodo = async (id: string) => {
    if (window.confirm("Bạn có muốn xóa")) {
      try {
        const response = await deleteTodo(id);
        if (response) {
          dispatch(loadingPage());
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleEditItem = (value: any) => {
    seteditTask(value);
    setisOpen(true);
  };
  const hideModal = () => {
    setisOpen(false);
  };
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
    },
    {
      field: "setting",
      headerName: "Actions",
      width: 250,
      renderHeader: () => (
        <button type="button" className="w-8 h-8 flex items-center">
          <SettingsOutlinedIcon />
        </button>
      ),
      renderCell: (params: any) => (
        <div className="flex flex-row gap-2">
          <button
            className="px-3 py-1 border-2 border-black rounded-md bg-yellow-300"
            onClick={() => {
              handleEditItem(params.row);
            }}
          >
            <EditOutlinedIcon />
          </button>
          <button
            className="px-3 py-1 border-2 border-black rounded-md bg-red-400"
            onClick={() => handleDeleteTodo(params.row.id)}
          >
            <DeleteOutlineOutlinedIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="h-[380px] w-full">
        <DataGrid
          rows={todoList}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={perPage}
          onPageSizeChange={(newPerPage) => {
            setperPage(newPerPage);
          }}
          checkboxSelection
        />
      </div>
      <EditTodoModal isOpen={isOpen} editItem={editTask} hide={hideModal} />
    </div>
  );
}

export default TodoList;
