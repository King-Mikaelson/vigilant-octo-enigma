import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdOutlineDelete } from "react-icons/md";

export default function UserLists() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/manageusers");
  };

  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/manageusers");
  };

  return (
    <section className="users-list">
      <h3 className="header">
        <MdArrowBackIos className="icon" onClick={handleBack} /> Manage Users -{" "}
        <span className="add-new-user">Users List</span>
      </h3>
      <section className="userslist-data">
        <div className="users-header">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Phone</h4>
          <h4>Role</h4>
          <h4>Status</h4>
          <h4>Action</h4>
        </div>
        <hr className="users-header_hr" />
        <div className="user-row">
          <p>John Doe</p>
          <p>johng@yahoo.com</p>
          <p>08012345678</p>
          <p>Admin</p>
          <p>Active</p>
          <div className="action-div">
            <button className="suspend-btn">Suspend</button>
            <span>
              <MdOutlineDelete />
            </span>
          </div>
        </div>
        <hr className="user-row_hr" />
        {isModalOpen && (
          <div className="user-modal">
            <div className="modal-content">
              <p>A link has been sent to the email address you provided!</p>
              <button className="close-btn" onClick={handleModalClose}>
                Okay
              </button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
