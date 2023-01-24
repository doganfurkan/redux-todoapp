import React from "react";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function List() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <div id="list">
      {items.map((item, key) => {
        return (
          <div className={`listItem ${item.completed ? "completed" : ""}`} key={key}>
            <button className="tmm">
              <AiOutlineCheck />
            </button>
            <div className="not">{item.title}</div>
            <button className="sil">
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
}
