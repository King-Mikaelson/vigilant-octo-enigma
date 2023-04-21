import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdAddCard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const [selectedItem, setSelectedItem] = useState("profile");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="settings-layout">
      <div className="settings-sidebar">
        <ul>
          <li
            className={selectedItem === "profile" ? "selected" : ""}
            onClick={() => handleItemClick("profile")}
          >
            <span className="layout-icon">
              <CgProfile />
            </span>

            <Link to="/editprofile">Profile</Link>
          </li>
          <li
            className={selectedItem === "users" ? "selected" : ""}
            onClick={() => handleItemClick("users")}
          >
            <span className="layout-icon">
              <TbUsers />
            </span>
            Manage Users
          </li>
          <li
            className={selectedItem === "subscriptions" ? "selected" : ""}
            onClick={() => handleItemClick("subscriptions")}
          >
            <span className="layout-icon">
              <MdAddCard />
            </span>
            Manage Subscriptions
          </li>
        </ul>
      </div>
      <div className="settings-content">{children}</div>
    </div>
  );
}
