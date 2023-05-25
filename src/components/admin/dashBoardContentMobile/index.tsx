import React from "react";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { MdArrowBackIosNew } from "react-icons/md";
import { orders, table } from "../../../frontendData/frontendData";

function DashBoardMobileContent() {
  const { setOpenDashboardContent } = useContext(AppContext);

  return (
    <div className="dashBoardMobile__content">
      <div className="header__parent">
        <div
          className="header"
          onClick={() => setOpenDashboardContent?.(false)}
        >
          <MdArrowBackIosNew size={15} className="back__icon" />
          <h2>Order List</h2>
        </div>
        <hr />
      </div>
        <div className="content__parent">

          {table.map((item, index) => (
            <div key={index} className="content__child">
              <div className="content__head">
                <h2>{item.orderNo}</h2>
                <h3>₦{item.totalPayment.toLocaleString()}</h3>
              </div>
              <div className="flex">
                {item.menu.map((item, index) => (
                  <p key={index} className="order-name">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default DashBoardMobileContent;
