import { ChildrenProp } from "../../types";
import logo from "../../assets/uppistLogo.png";

export default function AuthLayout({ children }: ChildrenProp) {
  return (
    <section className="authlayout">
      <aside className="authlayout__left">
        <a href="uppist.com" target="_blank" rel="noreferrer">
          About us
        </a>
        <a href="uppist.com" target="_blank" rel="noreferrer">
          Contact us
        </a>
      </aside>
      <aside className="authlayout__right">
        {children}
        <p className="authlayout__right--logo">
          {/* //img should be a link */}
          powered by <img src={logo} alt="logo" />
        </p>
      </aside>
    </section>
  );
}
