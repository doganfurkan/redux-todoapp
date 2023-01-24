import React from "react";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function List() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <div id="list">
      <div className="listItem">
        <button className="tmm">
          <AiOutlineCheck />
        </button>
        <div className="not">Bu benim notum</div>
        <button className="sil">
          <AiFillDelete />
        </button>
      </div>
      {items.map((item, key) => {
        return (
          <div className="listItem" key={key}>
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
