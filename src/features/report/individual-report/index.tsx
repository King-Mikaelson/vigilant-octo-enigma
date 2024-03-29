import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


type Users = {
  id: number;
  name: string;
};

const users: Users[] = [
  {
    id: 1,
    name: "Joy Joy",
  },
  {
    id: 2,
    name: "Mike Dollars",
  },
  {
    id: 3,
    name: "Alucard Sinzu",
  },
];

function IndividualReport() {
  const navigate = useNavigate();

  return (
    <div className="individualReports">
      <h1>IndividualReport</h1>
      <div className="header__parent">
        <div
         onClick={() => {navigate(-1); navigate("/reports")}}
          className="header"
        >
          <MdArrowBackIosNew size={15} className="back__icon" />
          <h2>Individual Report</h2>
        </div>
        <hr />
      </div>

      <div className="waiters">
        <h2>Select a waiter/waitress to see their report</h2>

        <div className="waiters__list">
          {users?.map((user) => (
              <Link key={user.id} className="waiters__link" to={`/reports/individual-report/${user.id}`}>
                <p>{user.name}</p>
              </Link>
          ))}
           </div>

      </div>
    </div>
  );
}

export default IndividualReport;
