import {useState} from "react";
import { RiSunFill, RiMoonClearFill, RiAppsFill} from 'react-icons/ri';
import Menu from "./Menu";


function Header() {
    const [theme,setTheme] = useState(true);
    const [acik,setAcik] = useState(false);
  return (
    <header>
      <div id="headerduzen">
        <div id="logo">Todo</div>
        <div id="theme">
          <button onClick={()=> {
            document.body.classList.toggle("dark");
            setTheme(!theme)
          }} title="themechanger">{theme ? <RiSunFill/> : <RiMoonClearFill/>}</button>
          <button title="menuButton" onClick={() => {setAcik(!acik)}}>
            <RiAppsFill/>
          </button>
        </div>
        <Menu klas={acik}/>
      </div>
    </header>
  );
}

export default Header;
