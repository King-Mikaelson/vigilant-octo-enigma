import React from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const StoresCard = () => {
  return (
    <div>
      <div className="store_link">
        <Link to="/stores/add_store" className="store_link-btn">
          <BiPlus />
          <p>Add new store</p>
        </Link>
      </div>

      <div className="stores_container">
        {stores.map((store, index) => (
          <div key={index} className="store-card_container">
            <div className="store_card">
              <p>{store.name}</p>
              <div>
                <Link to={store.link}>
                  <button>View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresCard;
type storesProps = {
  name: string;
  link: string;
};

const stores: storesProps[] = [
  {
    name: "Hot n’ Spicy Restaurant, New Haven, Enugu",
    link: "#",
  },
  {
    name: "Hot n’ Spicy Restaurant, Ikeja, Lagos",
    link: "#",
  },
  {
    name: "Hot n’ Spicy Restaurant, Wuse, Abuja",
    link: "#",
  },
  {
    name: "Hot n’ Spicy Restaurant, Kaduna, Kaduna",
    link: "#",
  },
  {
    name: "Hot n’ Spicy Restaurant, Awka, Anambra",
    link: "#",
  },
  {
    name: "Hot n’ Spicy Restaurant, Awka, Anambra",
    link: "#",
  },
];
