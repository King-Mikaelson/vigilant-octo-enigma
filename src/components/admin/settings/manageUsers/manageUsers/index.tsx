import { MdArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const navigate = useNavigate();

  return (
    <div className="manage-container">
      {/* <h3>Manage Users</h3> */}
      <h3 className="auth__heading edit-prof">
          <MdArrowBackIos className="edit-prof-icon" onClick={() => {navigate(-1)}} />{" "}
          Manage Users
        </h3>
      <div className="links-container">
        <div className="user-link">
          <Link to="/settings/manageusers/add-users" className="user-link1">
            Add Users
          </Link>
        </div>
        <div className="user-link">
          <Link to="/settings/manageusers/users-list" className="user-link1">
            Users List
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ManageUsers;
