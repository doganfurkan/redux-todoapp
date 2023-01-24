import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { changeFilter } from "../redux/todos/todosSlice";

export default function Filters() {
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e));
  }
  return (
    <div id="filters">
      <div id="buttons">
      <button onClick={(e) => {handleChange("all")}} className={activeFilter == "all" ? "selected" : ""}>Tümü</button>
      <button onClick={(e) => {handleChange("active")}} className={activeFilter == "active" ? "selected" : ""}>Aktif</button>
      <button onClick={(e) => {handleChange("completed")}} className={activeFilter == "completed" ? "selected" : ""}>Yapılmış</button>
      </div>
    </div>
  );
}
