type Props = {
  name?: string;
  branch?: string;
};

function TopMenu({ name, branch }: Props) {
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {
    weekday: "long",
  })}, ${current.toLocaleString("en-US", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className="topMenu__container">
      <div className="topbar__search">
        <h1>
          {name} <span>- {branch}</span>
        </h1>
      </div>

      <p>{date}</p>
    </div>
  );
}

export default TopMenu;
