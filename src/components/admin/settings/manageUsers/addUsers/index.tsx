import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";

export default function AddUsers() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/settings/manageusers");
    }, 2000);
  };

  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/manageusers");
  };

  const handleCancelEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/manageusers");
  };

  return (
    <section className="container edit-prof addNewUser">
      <section className="auth edit-prof">
        <h3 className="auth__heading edit-prof h3">
          <MdArrowBackIos className="edit-prof-icon" onClick={handleBack} />{" "}
          Manage Users - <span className="add-new-user">Add New Users</span>
        </h3>
        <p className="adduser-text">
          To add new user, input their email address in the space provided below
          and select a role, a link would be sent to them to create an account.
        </p>
        <form className="form edit-prof" onSubmit={(e) => handleSubmit(e)}>
          <aside className="form-items">
            <label htmlFor="email">
              <h3>Email address</h3>
              <div className="input-element">
                <Input
                  type="email"
                  email={email}
                  handleEmail={handleEmail}
                  placeholder="Add user's email address"
                />
              </div>
            </label>

            <div className="adduser-field">
              <label htmlFor="role">Role </label>
              <select id="role">
                <option value="roles">Add role</option>
                <option value="role1">Waiter</option>
                <option value="role2">Branch Manager</option>
                <option value="role3">Admin</option>
              </select>
            </div>
          </aside>

          <Button text={isLoading ? "Sending..." : "Send Link"} />

          <div className="cancel-btn-div">
            <button
              className="cancel-btn"
              type="submit"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
