import {useState} from "react";
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';


function Header() {
    const [theme,setTheme] = useState(true);
  return (
    <header>
      <div id="headerduzen">
        <div id="logo">Todo</div>
        <div id="theme">
          <button onClick={()=> {
            document.body.classList.toggle("dark");
            setTheme(!theme)
          }}>{theme ? <RiSunFill/> : <RiMoonClearFill/>}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
