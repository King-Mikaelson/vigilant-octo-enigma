import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdOutlineCancel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { UserListProps } from "../../../../../types";

const UsersList: UserListProps[] = [
  {
    name: "Jane Smith",
    email: "johndoe@gmail.com",
    phone: "09014567890",
    role: "Waitress",
    status: "Active",
    action: "Suspend",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "09014567890",
    role: "Waiter",
    status: "Inactive",
    action: "Suspend",
  },
  {
    name: "Nneka Eze",
    email: "johndoe@gmail.com",
    phone: "09014567890",
    role: "Waitress",
    status: "Active",
    action: "Suspend",
  },
  {
    name: "Michael Prince",
    email: "johndoe@gmail.com",
    phone: "09014567890",
    role: "Waiter",
    status: "Inactive",
    action: "Suspend",
  },
];
export default function UserLists() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<
    (typeof UsersList)[number] | null
  >(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSuspend = () => {};
  const handleDelete = () => {};

  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSuspendUser = (user: (typeof UsersList)[number]) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleDeleteUser = (user: (typeof UsersList)[number]) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setSelectedUser(null);
    setIsDeleteModalOpen(false);
  };

  const handleBack = () => {
    navigate("/settings/manageusers");
  };

  return (
    <section className="users-list">
      <h3 className="header">
          <MdArrowBackIos className="edit-prof-icon" onClick={handleBack} />{" "}
          Manage Users - <span className="add-new-user">Users List</span>
        </h3>
      <section className="userslist-data">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {UsersList.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td
                  style={{
                    color: user.status === "Active" ? "#00C851" : "red",
                  }}
                >
                  {user.status}
                </td>
                <td>
                  <button
                    className="suspend-btn"
                    onClick={() => handleSuspendUser(user)}
                  >
                    {user.action}
                  </button>
                  <button
                    className="del-user_btn"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <AiOutlineDelete className="delete-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="del-container">
            <div className="del-content">
              <span
                className="close-btn"
                onClick={() => {
                  handleModalClose();
                }}
              >
                <MdOutlineCancel />
              </span>
              <p className="suspend-p">
                Suspend <span>{selectedUser?.name}</span>?
              </p>

              <div className="buttons">
                <button className="del-btn" onClick={handleSuspend}>
                  Suspend
                </button>
                <button
                  className="cancel-btn suspend-cancel-btn"
                  onClick={() => {
                    handleModalClose();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {isDeleteModalOpen && (
          <div className="del-container">
            <div className="del-content">
              <span
                className="close-btn"
                onClick={() => {
                  handleDeleteModalClose();
                }}
              >
                <MdOutlineCancel />
              </span>
              <p className="suspend-p">
                Delete <span>{selectedUser?.name}</span> as a user?
              </p>

              <div className="buttons">
                <button className="del-btn" onClick={handleDelete}>
                  Delete
                </button>
                <button
                  className="cancel-btn suspend-cancel-btn"
                  onClick={() => {
                    handleDeleteModalClose();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
