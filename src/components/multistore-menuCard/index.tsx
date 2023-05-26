import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import mealImage from "../../assets/fastFoodPic.png";
import wineImage from "../../assets/fastFoodPic1.png";
import doughnut from "../../assets/fastFoodPic2.png";
import { Stock, Store } from "../../frontendData/frontendData";

import EditItem from "../admin/items/editItem";
import DeleteItem from "../admin/items/deleteItem";
import { useState } from "react";

interface Props {
  item: Store;
}

function SingleCard({ item }: Props) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  return (
    <>
      {openEdit ? <EditItem setOpenEdit={setOpenEdit} /> : " "}
      {openDelete ? <DeleteItem setOpenDelete={setOpenDelete} /> : " "}
      <div className="multiStore-menuCard__card">
        {item.item_category === "Meals" ? (
          <img src={mealImage} alt="meals" />
        ) : item.item_category === "Wine" ? (
          <img src={wineImage} alt="wines" />
        ) : (
          <img src={doughnut} alt="desserts" />
        )}
        <p className="multiStore-menuCard__title">{item.item_name}</p>
        <p className="multiStore-menuCard__price">{`₦${Number(
          item.item_price
        ).toLocaleString()}`}</p>
      </div>
    </>
  );
}

function MultiStoreMenuCard() {
  return (
    <div className="multiStore-menuCard">
      {Stock.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MultiStoreMenuCard;
