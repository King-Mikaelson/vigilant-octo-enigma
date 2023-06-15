import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MobileSettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="mobileReportsPage">
      <div className="header__parent">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="header"
        >
          <MdArrowBackIosNew size={15} className="back__icon" />
          <h2>Settings</h2>
        </div>
        <hr />
      </div>

      <div className="mobileMenu">
        <NavLink to={"/settings/profile"} className="mobileMenu__child">
          <p>Profile</p>
        </NavLink>

        <NavLink to={"/settings/manageusers"} className="mobileMenu__child">
          <p>Manage Users</p>
        </NavLink>

        <NavLink to={"/settings/managesubscriptions"} className="mobileMenu__child">
          <p>Manage Subscriptions</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MobileSettingsPage;
