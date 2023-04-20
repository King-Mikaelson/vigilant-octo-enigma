import { useState } from "react";

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
            Profile
          </li>
          <li
            className={selectedItem === "manage" ? "selected" : ""}
            onClick={() => handleItemClick("manage")}
          >
            Manage Account
          </li>
          <li
            className={selectedItem === "edit" ? "selected" : ""}
            onClick={() => handleItemClick("edit")}
          >
            Edit
          </li>
        </ul>
      </div>
      <div className="settings-content">{children}</div>
    </div>
  );
}
