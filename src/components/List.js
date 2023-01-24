import React from 'react';
import { AiOutlineCheck,AiFillDelete } from 'react-icons/ai';

export default function List() {
  return (
    <div id="list">
        <div className="listItem">
            <button className="tmm"><AiOutlineCheck/></button>
            <div className="not">Bu benim notum</div>
            <button className="sil"><AiFillDelete/></button>
        </div>
        <div className="listItem">
            <button className="tmm"><AiOutlineCheck/></button>
            <div className="not">Bu not</div>
            <button className="sil"><AiFillDelete/></button>
        </div>
        <div className="listItem">
            <button className="tmm"><AiOutlineCheck/></button>
            <div className="not">Noooot</div>
            <button className="sil"><AiFillDelete/></button>
        </div>
    </div>
  )
}
