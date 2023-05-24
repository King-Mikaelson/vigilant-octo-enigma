import { CiSearch } from "react-icons/ci";
import {MdArrowBackIosNew} from "react-icons/md"
import {AiOutlinePlus} from "react-icons/ai"
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function TopBar() {
  const { setOpenAddItem } = useContext(AppContext);
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {
    weekday: "long",
  })}, ${current.toLocaleString("en-US", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className="topbar__container">
      <div className="heading">
      <div className="heading__back">
      <MdArrowBackIosNew size={20} className="back__icon"/>
      <h1>Menu Manager</h1>
       </div>
      <div className="topbar__button"  onClick={() => setOpenAddItem?.(true)}>
      <AiOutlinePlus size={20} className="plus__icon"/>
      <h3>Add Item</h3>
      </div>
      </div>
      <div className="topbar__container__search">
        <CiSearch size={25} className="search__icon" />
        <input type="text" placeholder="Search for food, drinks, etc..." />
      </div>

      <p>{date}</p>
    </div>
  );
}

export default TopBar;
