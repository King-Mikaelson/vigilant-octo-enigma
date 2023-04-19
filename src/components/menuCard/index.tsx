import {AiOutlineDelete} from "react-icons/ai";
import {FaRegEdit} from "react-icons/fa";
import mealImage from "../../assets/mealImage.png";
import wineImage from "../../assets/wineImage.png";
import doughnut from "../../assets/doughnut.png";
import {Stock, Store} from "../../frontendData/frontendData";
import EditItem from "../../components/items/editItem";
import DeleteItem from "../../components/items/deleteItem";
import {useState} from "react";

interface Props{
  item:Store
}

function SingleCard({item}:Props){
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  return(
    <>
    {openEdit ? <EditItem/> : " "}
    {openDelete ? <DeleteItem/> : " "}
    <div className="menuCard__card" key={item.id}>
    {item.category === "Meals" ? <img src={mealImage} alt="meals"/> : item.category === "Wine" ? <img src={wineImage} alt="wines"/> : <img src={doughnut} alt="desserts"/>}
    <p className="menuCard__title">{item.name}</p>
    <p className="menuCard__price">{`₦${Number(item.price).toLocaleString()}`}</p>
    <div className="menuCard__icons">
      <div className="edit__parent">
      <div className="edit" onClick={() => setOpenEdit((prevValue) => !prevValue  )}>
      <FaRegEdit size={30}/>
      </div>
      <p>Edit</p>
      </div>
      <div className="delete__parent">
      <div className="delete" onClick={() => setOpenDelete((prevValue) => !prevValue  )}>
      <AiOutlineDelete  size={25}/>
      </div>
      <p>Delete</p>
      </div>
    </div>
      </div>
    </>
    
  )
}

function MenuCard() {
  return (
    <div className="menuCard">
      {
        Stock.map((item) => (
          <SingleCard item={item}/>
        ))
      }
    </div>
  )
}

export default MenuCard