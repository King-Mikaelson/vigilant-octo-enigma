import Input from "../ui/Input";
import { CiSearch } from "react-icons/ci";

type Props = {};

function TopBar({}: Props) {
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {
    weekday: "long",
  })}, ${current.toLocaleString("en-US", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;
  
  return (
    <div className="topbar__container">
      <div className="search__container">
        <CiSearch size={20} />
        <Input type="text" />
      </div>
      <p>{date}</p>
    </div>
  );
}

export default TopBar;
