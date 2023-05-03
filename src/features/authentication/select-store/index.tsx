import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import AuthLayout from "../../../layout/authLayout";
import { useNavigate } from "react-router";

export default function SelectStore() {
  const { setStoreType } = useContext(AppContext);
  const navigate = useNavigate();
  //SINGLESTORE
  const singleStoreActions = () => {
    setStoreType?.("single");
    navigate("/signup");
  };
  //MULTISTORE
  const multiStoreActions = () => {
    setStoreType?.("multi");
    navigate("/signup");
  };
  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Create your Account</h1>
          <p className="auth__subHeading">
            Select the kind of store you operate
          </p>

          <aside className="auth__storeType">
            <p onClick={singleStoreActions}>single store</p>
            <p onClick={multiStoreActions}>multi store</p>
          </aside>
        </section>
      </section>
    </AuthLayout>
  );
}
