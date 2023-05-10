import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { BsLink45Deg, BsPersonCircle } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../../../../ui/button";

const Profile = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleAccountMigration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/migrate_store");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileName = file.name;
    const fileSize = file.size / 1024; // convert to KB
    const maxSize = 50;
    if (fileSize > maxSize) {
      e.target.value = "";
      document.getElementById(
        "file-name"
      )!.textContent = `File size should not exceed ${maxSize}KB`;
      document.getElementById("file-name")!.style.color = "red";
    } else {
      document.getElementById("file-name")!.textContent = fileName;
      document.getElementById("file-name")!.style.color = "black";
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>Profile</h3>
        <button>
          <Link to="/settings/profile/editprofile" className="profile-link-btn">
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
            <Link
              to="/settings/profile/changepassword"
              className="password-link-btn"
            >
              <p>Change Password</p>
              <span>
                <RiArrowRightSLine />
              </span>
            </Link>
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
          <p className="img-type">Accepted file types: jpg, png, jpeg.</p>
          <p className="max-mb">Max size: 50KB</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="avatar-input">
              <div
                className="logo-input"
                style={{
                  height: "50px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <div
                  className="logo-input-text"
                  style={{
                    position: "absolute",
                    display: "flex",
                    gap: "20px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <BsLink45Deg size={18} />
                  Choose file
                </div>

                <input
                  type="file"
                  id="avatar-input"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                  className="logo-input-file"
                />
              </div>
            </label>
          </form>
          <span id="file-name"></span>
        </div>
      </div>
      <hr className="profile-hr" />

      {/* About Container */}
      <div className="about-profile_container">
        <div className="about_details">
          <p>About Us</p>
          <Link to="/about_us">
            <RiArrowRightSLine size={25} className="icon" />
          </Link>
        </div>

        <div className="about_details">
          <p>Contact Us</p>
          <Link to="/contact_us">
            <RiArrowRightSLine size={25} className="icon" />
          </Link>
        </div>

        <div className="about_details">
          <p>Privacy Policy</p>
          <Link to="/privacy_policy">
            <RiArrowRightSLine size={25} className="icon" />
          </Link>
        </div>
      </div>

      <hr className="profile-hr" />
      <div className="profile-delete_account migrate">
        <Button
          text="Migrate to a multiple store account"
          onclick={(e) => handleAccountMigration(e)}
        />
      </div>
      <hr className="profile-hr" />
      <div className="profile-delete_account">
        <Link to="/confirm_delete_account">Delete Account</Link>
      </div>
    </div>
  );
};
export default Profile;
