import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TopMenu from "../../components/topMenu";

export default function ReportLayout() {
  const [selectedItem, setSelectedItem] = useState("individual");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="reports">
      <TopMenu name="Reports" />
      <div className="reports-layout">
        <div className="reports-sidebar">
          <ul>
            <li
              className={selectedItem === "individual" ? "selected" : ""}
              onClick={() => handleItemClick("individual")}
            >
              <span className="layout-icon">
                <CgProfile />
              </span>

              <Link to="/individual-report">Individual Report</Link>
            </li>
            <li
              className={selectedItem === "general" ? "selected" : ""}
              onClick={() => handleItemClick("general")}
            >
              <span className="layout-icon">
                <TbUsers />
              </span>
              <Link to="/general-report">General Report</Link>
            </li>
          </ul>
        </div>
        <div className="reports-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
