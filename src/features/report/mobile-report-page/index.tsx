import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function MobileReportPage() {
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
          <h2>Report</h2>
        </div>
        <hr />
      </div>

    <div className="mobileMenu">

          <NavLink
            to={"/reports/individual-report"}
            className="mobileMenu__child"
          >
            <p>Individual Report</p>
          </NavLink>

          <NavLink
            to={"/reports/general-report"}
            className="mobileMenu__child"
          >
            <p>General Report</p>
          </NavLink>

      </div>
    </div>
  )
}

export default MobileReportPage

