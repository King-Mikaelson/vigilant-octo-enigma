import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { BsLink45Deg, BsPersonCircle } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>Profile</h3>
        <button>
          <Link to="/settings/editprofile" className="profile-link-btn">
            <CiEdit />
            Edit Profile
          </Link>
        </button>
      </div>
      <div className="profile-name">
        <span>
          <BsPersonCircle />
        </span>
        <h3>John Doe</h3>
        <p>Company’s ID #12345678</p>
      </div>
      <div className="profile-body">
        <div className="body-email">
          <span className="span1">Email</span>
          <p>ccachukwu@gmail.com</p>
        </div>
        <div className="body-phone">
          <span className="span1">Phone Number</span>
          <p>(+234) 813 300 0000</p>
        </div>
        <div className="body-password">
          <span>Password</span>
          <div className="change-password">
            <p>Change Password</p>
            <span>
              <RiArrowRightSLine />
            </span>
          </div>
        </div>
      </div>
      <hr className="profile-hr" />
      {/* business deeets */}
      <div className="business-body">
        <div className="biz-name">
          <span>Your Business Name</span>
          <p>Hot n’ Spicy Restaurant</p>
        </div>
        <div className="biz-address">
          <span>Your Business Address</span>
          <p>Plot 47, Central Business District, FCT.</p>
        </div>
        <div className="biz-logo">
          <span>Upload Business Logo</span>
          <p className="img-type">Accepted file types: img, png, jpeg.</p>
          <p className="max-mb">Max size: 5mb</p>
          <div className="logo-input">
            <input type="file" />
            <div>
              <span>
                <BsLink45Deg size={18} />
              </span>
              Choose file
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
