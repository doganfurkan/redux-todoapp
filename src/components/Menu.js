import React from "react";
import {VscCheckAll,VscTrash,VscCloseAll,VscChecklist} from "react-icons/vsc"
import { allDone, destroyDones, destroyAll,allNotDone} from "../redux/todos/todosSlice";
import { useDispatch } from "react-redux"; 

export default function Menu({klas}) {
    const dispatch = useDispatch();
  return (
    <div id="menu" className={klas ? "acik" : ""}>
      <div id="menuDuzen">
        <ul>
          <li onClick={() => {dispatch(allNotDone())}}><VscCheckAll/> İşaretleri Kaldır</li>
          <li onClick={() => {dispatch(allDone())}}><VscChecklist/> Hepsini İşaretle</li>
          <li onClick={() => {window.confirm("Emin Misin") && dispatch(destroyDones())}}><VscTrash/> Yapılmışları Sil</li>
          <li onClick={() => {window.confirm("Emin Misin") && dispatch(destroyAll())}}><VscCloseAll/> Hepsini Sil</li>
        </ul>
      </div>
    </div>
  );
}
