import { Link } from "react-router-dom";

const ManageUsers = () => {
  return (
    <div className="manage-container">
      <h3>Manage Users</h3>
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
