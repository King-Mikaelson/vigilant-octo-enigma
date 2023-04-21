import {card} from "../../frontendData/frontendData";

function dashboardCard() {
  return (
    <div className="dashboardAdminCard">
    {
        card.map((item, index) => (
            <div key={index} className="dashboardAdminCard__card">
            <h3>{item.title}</h3>
            <p>₦{Number(item.amount.toString()).toLocaleString()}</p>
           </div>
        ))

    }
    </div>

  )
}

export default dashboardCard