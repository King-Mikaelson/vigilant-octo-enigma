import logo from "../../../assets/uppistLogo.png";

export default function Trademark() {
  return (
    <p className="authlayout__footer--logo">
      {/* //img should be a link */}
      <span>powered by</span> <img src={logo} alt="logo" />
    </p>
  );
}
