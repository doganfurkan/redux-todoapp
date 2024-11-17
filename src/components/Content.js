import { useState } from "react";
import Filters from "./Filters";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import {nanoid} from "@reduxjs/toolkit"

function Content() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  const waitin = items.filter(item => item.completed === false);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let itm = {id: nanoid(),title:newTodo,completed:false}
    dispatch(addTodo(itm));
    setNewTodo("")
  };
  return (
    <section id="content">
      <div id="kutu">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Yeni not..."
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <button>Ekle</button>
        </form>
      </div>
      <div id="total">{waitin.length} yapılmamış, toplam {items.length} göreviniz var.</div>
      <List />
      <Filters />
    </section>
  );
}

export default Content;
