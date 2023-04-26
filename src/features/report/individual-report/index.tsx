import { Link } from "react-router-dom";

function IndividualReport() {
  return (
    <div className="individualReports">
      <h1>IndividualReport</h1>

      <div className="waiters">
        <h2>Select a waiter/waitress to see their report</h2>

        <div className="waiters__list">
          <Link className="waiters__link" to="/">
            <p>Joy</p>
          </Link>
          <Link className="waiters__link" to="/">
            <p>Mike</p>
          </Link>
          <Link className="waiters__link" to="/">
            <p>Alucard</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndividualReport;
