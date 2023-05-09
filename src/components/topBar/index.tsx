import { CiSearch } from "react-icons/ci";

function TopBar() {
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {
    weekday: "long",
  })}, ${current.toLocaleString("en-US", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className="topbar__container">
      <div className="topbar__search">
        <CiSearch size={25} className="search__icon" />
        <input type="text" placeholder="Search for food, drinks, etc..." />
      </div>

      <p>{date}</p>
    </div>
  );
}

export default TopBar;
