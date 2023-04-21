type Props = {
    name?: string;
    };

function TopMenu({name}:Props) {
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {
    weekday: "long",
  })}, ${current.toLocaleString("en-US", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className="topbar__container">
      <div className="topbar__search">
        <h1>{name}</h1>
      </div>

      <p>{date}</p>
    </div>
  );
}

export default TopMenu;
