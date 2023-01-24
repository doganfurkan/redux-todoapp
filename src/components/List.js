import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy } from "../redux/todos/todosSlice";
let filtreli = [];

export default function List() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  filtreli = items;
  if (activeFilter !== "all") {
    filtreli = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }
  console.log(items);

  /* 
  API İşlemleri--------------

const error = useSelector((state) => state.todos.error);


    useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);


if (error) {
    return (
      <div id="list">
        <div className="listItem">
          <div className="not">Hata: {error}</div>
        </div>
      </div>
    );
  } */

  return (
    <div id="list">
      {filtreli.length > 0 ? (
        filtreli.map((item, key) => {
          return (
            <div
              className={`listItem ${item.completed ? "completed" : ""}`}
              key={key}
            >
              <button
                className="tmm"
                onClick={() => {
                  dispatch(toggle({ id: item.id }));
                }}
              >
                <AiOutlineCheck />
              </button>
              <div className="not">{item.title}</div>
              <button
                className="sil"
                onClick={() => {
                  window.confirm("Emin Misin") && dispatch(destroy(item.id));
                }}
              >
                <AiFillDelete />
              </button>
            </div>
          );
        })
      ) : (
        <div className="listItem">
          <div className="not">Burada bir şey yok!</div>
        </div>
      )}
    </div>
  );
}
