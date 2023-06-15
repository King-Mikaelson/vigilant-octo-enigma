import { AiOutlineDelete } from 'react-icons/ai';
import { FaMinus, FaPlus, FaRegEdit } from 'react-icons/fa';
import mealImage from '../../assets/fastFoodPic.png';
import wineImage from '../../assets/fastFoodPic1.png';
import doughnut from '../../assets/fastFoodPic2.png';
import { CartTypes, Stock, Store } from '../../frontendData/frontendData';
import EditItem from '../admin/items/editItem';
import DeleteItem from '../admin/items/deleteItem';
import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';

interface Props {
  item: Store;
}

function SingleCard({ item }: Props) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  //Add and remove from order state
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);
  return (
    <>
      {openEdit ? <EditItem setOpenEdit={setOpenEdit} /> : ' '}
      {openDelete ? <DeleteItem setOpenDelete={setOpenDelete} /> : ' '}
      <div className="menuCard__card">
        {item.item_category === 'Meals' ? (
          <img src={mealImage} alt="meals" />
        ) : item.item_category === 'Wine' ? (
          <img src={wineImage} alt="wines" />
        ) : (
          <img src={doughnut} alt="desserts" />
        )}
        <p className="menuCard__title">{item.item_name}</p>
        <p className="menuCard__price">{`₦${Number(
          item.item_price
        ).toLocaleString()}`}</p>
        {/* <div className="menuCard__icons">
          <div className="edit__parent">
            <div
              className="edit"
              onClick={() => setOpenEdit((prevValue) => !prevValue)}
            >
              <FaRegEdit size={25} />
            </div>
            <p>Edit</p>
          </div>
          <div className="delete__parent">
            <div
              className="delete"
              onClick={() => setOpenDelete((prevValue) => !prevValue)}
            >
              <AiOutlineDelete size={20} />
            </div>
            <p>Delete</p>
          </div>
        </div> */}
        <div className="menuCard__cartAction">
          <aside>
            {cart.some((c: CartTypes) => c.item_name === item.item_name) ? (
              <div
                onClick={() =>
                  dispatch!({
                    type: 'REMOVE_FROM_CART',
                    payload: item,
                  })
                }
              >
                <FaMinus color="#ec9c04" size={12} />
                <button className="button__element addToCart">
                  Remove item
                </button>
              </div>
            ) : (
              <div
                onClick={() =>
                  dispatch!({
                    type: 'ADD_TO_CART',
                    payload: item,
                  })
                }
              >
                <FaPlus color="#ec9c04" size={12} />
                <button className="button__element addToCart">
                  Add to order
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

function MenuCard() {
  const {
    state: { items },
    transformItems,
  } = useContext(AppContext);
  return (
    <div className="menuCard">
      {Stock?.map((item: Store) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuCard;
