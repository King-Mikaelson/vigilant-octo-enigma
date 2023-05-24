import { card } from "../../../frontendData/frontendData";
import AppContext from "../../../context/AppContext";
import { useContext } from "react";
function DashboardCard() {
  const {setOpenDashboardContent} = useContext(AppContext);

  return (
    <div className="dashboardAdminCard">
      <div className="dashboardOpen__mobile" onClick={() => {setOpenDashboardContent?.(true)}}>
        <h3>Click here to see your order list</h3>
      </div>

      <div className="nodisplay">
          <h3>Total Revenue</h3>
          <p>₦148,800</p>
        </div>

        <div className="dashboardAdminCard__child">
      {card.map((item, index) => (
        item.title  !== "Total Revenue" ? 
          <div key={index} className="dashboardAdminCard__card">
          <h3>{item.title}</h3>
          {item.title === "Total Orders" ? (
            <p>{Number(item.amount.toString()).toLocaleString()}</p>
          ) : (
            <p>₦{Number(item.amount.toString()).toLocaleString()}</p>
          )}
        </div> : <div key={index} className="dashboardAdminCard__card display">
          <h3>{item.title}</h3>
            <p>₦{Number(item.amount.toString()).toLocaleString()}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default DashboardCard;
