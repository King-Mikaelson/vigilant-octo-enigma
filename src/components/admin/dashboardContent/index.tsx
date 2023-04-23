import mealImage from "../../../assets/mealImage.png";
import wineImage from "../../../assets/wineImage.png";
import { orders, table } from "../../../frontendData/frontendData";

export default function DashboardContent() {
  return (
    <div className="dashboardContent">
      <div className="dashboardContent__main">
        <h2>Order List</h2>

        <table>
          <thead>
            <tr>
              <th>Order no.</th>
              <th>Menu</th>
              <th>Total Payment</th>
            </tr>
          </thead>

          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.orderNo}</td>
                <td className="flex">
                  {item.menu.map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </td>
                <td>₦{item.totalPayment.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboardContent__side">
        <h2>Top 5 Most Ordered Items</h2>

        <div className="card">
          {orders.map((item, index) => (
            <div key={index} className="card__child">
              {index % 2 === 0 ? (
                <img src={mealImage} alt="meals" />
              ) : (
                <img src={wineImage} alt="wines" />
              )}
              <div className="card__text">
                <h4>{item.name}</h4>
                <p>{item.order}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
