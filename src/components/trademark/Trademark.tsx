import logo from "../../assets/uppistLogo.png";

export default function Trademark() {
  return (
    <p className="authlayout__right--logo">
      {/* //img should be a link */}
      powered by <img src={logo} alt="logo" />
    </p>
  );
}
