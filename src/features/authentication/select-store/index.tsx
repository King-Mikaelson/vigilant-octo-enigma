import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import AuthLayout from "../../../layout/authLayout";
import { useNavigate } from "react-router";
import AuthContext from "../../../features/authentication/context/AuthContext";


export default function SelectStore() {
  const { setStoreType } = useContext(AppContext);
  const { setSingleStoreState } = useContext(AuthContext);

  const navigate = useNavigate();
  //SINGLESTORE
  const singleStoreActions = () => {
    setStoreType?.("single");
    // I am resetting the state for the forms for the signUp Page back to one, the first form
    setSingleStoreState?.("one");
    navigate("/signup");
  };
  //MULTISTORE
  const multiStoreActions = () => {
    setStoreType?.("multi");
        // I am resetting the state for the forms for the signUp Page back to one, the first form
    setSingleStoreState?.("one");
    navigate("/signup");
  };
  return (
    <AuthLayout>
      <section className="container">
        <section className="auth storeType">
          <h1 className="auth__heading">Create your Account</h1>
          <p className="auth__subHeading">
            Select the kind of store you operate
          </p>

          <aside className="auth__storeType">
            <p onClick={singleStoreActions}>single store</p>
            <p onClick={multiStoreActions}>multiple store</p>
          </aside>
        </section>
      </section>
    </AuthLayout>
  );
}
