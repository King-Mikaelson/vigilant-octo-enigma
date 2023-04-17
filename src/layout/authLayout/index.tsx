import Trademark from "../../components/trademark/Trademark";
import { ChildrenProp } from "../../types";

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
      <aside className="authlayout__right">{children}</aside>
      <aside className="authlayout__footer">
        <Trademark />
      </aside>
    </section>
  );
}
