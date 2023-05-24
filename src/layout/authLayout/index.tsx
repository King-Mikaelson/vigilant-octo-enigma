import { ChildrenProp } from "../../types";
import Trademark from "../../components/authentication/trademark/Trademark";

export default function AuthLayout({ children }: ChildrenProp) {
  return (
    <section className="authlayout">
      <aside className="authlayout__left">
        <div>
          <a href="uppist.com" target="_blank" rel="noreferrer">
            About us
          </a>
        </div>
        <div>
          <a href="uppist.com" target="_blank" rel="noreferrer">
            Contact us
          </a>
        </div>
      </aside>
      <aside className="authlayout__right">{children}</aside>
      <aside className="authlayout__footer">
        <Trademark />
      </aside>
    </section>
  );
}
