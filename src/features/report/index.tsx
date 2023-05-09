import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TopMenu from "../../components/topMenu";
import { useNavigate } from "react-router-dom";
import { HiOutlineChartSquareBar } from "react-icons/hi";


export default function ReportLayout() {
  const [selectedItem, setSelectedItem] = useState("individual");
  const navigate = useNavigate();

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
              onClick={() => {handleItemClick("individual"); navigate("/reports/individual-report")}}
            >
              <span className="layout-icon">
                <HiOutlineChartSquareBar/>
              </span>

              <Link to="/reports/individual-report">Individual Report</Link>
            </li>
            <li
              className={selectedItem === "general" ? "selected" : ""}
              onClick={() => {handleItemClick("general"); navigate("/reports/general-report")}}
            >
              <span className="layout-icon">
                <HiOutlineChartSquareBar />
              </span>
              <Link to="/reports/general-report">General Report</Link>
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
