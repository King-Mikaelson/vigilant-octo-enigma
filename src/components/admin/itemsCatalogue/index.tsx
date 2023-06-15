import { useState, useContext, useEffect } from 'react';
import mealImage from '../../../assets/fastFoodPic.png';
import wineImage from '../../../assets/fastFoodPic1.png';
import doughnut from '../../../assets/fastFoodPic2.png';
import Button from '../../ui/button';
import ConfirmPayment from '../../modals/ConfirmPayment';
import AppContext from '../../../context/AppContext';
import { CartTypes } from '../../../frontendData/frontendData';
import Input from '../../ui/Input';

export default function ItemsCatalogue() {
  const [openModal, setOpenModal] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const {
    state: { fromCatalogue },
    dispatch,
  } = useContext(AppContext);
  const handleModalClose = () => {
    setOpenModal(!openModal);
  };
  const handleConfirmModal = () => {
    setConfirmPayment(!confirmPayment);
  };

  return (
    <section className="catalogue">
      {confirmPayment && (
        <>
          <div
            className={confirmPayment ? 'modal' : ''}
            onClick={handleConfirmModal}
          ></div>
          <ConfirmPayment closeConfirmPayment={handleConfirmModal} />
        </>
      )}
      {/* FIXED HEADER */}
      <section className="catalogue__header">
        <h1>Select items to add to menu</h1>
        <button className="disabled button__element">
          <span>+</span>Add
        </button>
      </section>

      {/* CATALOGUE SECTION */}
      <section className="catalogue__items">
        {fromCatalogue.length === 0 && (
          <aside className="empty">
            Selected items will appear <br /> here
          </aside>
        )}
        {fromCatalogue.length > 0 && (
          <>
            {fromCatalogue?.map((item: CartTypes, index: string) => (
              <aside key={index}>
                <h3
                  onClick={() =>
                    dispatch!({
                      type: 'REMOVE_FROM_CATALOGUE',
                      payload: item,
                    })
                  }
                >
                  remove
                </h3>
                <div className="card">
                  {item.item_category === 'Meals' ? (
                    <img src={mealImage} alt="meals" />
                  ) : item.item_category === 'Wine' ? (
                    <img src={wineImage} alt="wines" />
                  ) : (
                    <img src={doughnut} alt="desserts" />
                  )}
                  <p className="title">{item.item_name}</p>
                </div>
                <div className="forms">
                  <div className="form-field">
                    <label htmlFor="itemCategory">Item Category</label>
                    <select
                      className="input__element"
                      id="itemCategory"
                      value={itemCategory}
                      onChange={(e) => setItemCategory(e.target.value)}
                    >
                      <option value="category">Add Item Category</option>
                      <option value="Meals">Meals</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Pastries">Pastries</option>
                      <option value="Sides">Sides</option>
                      <option value="Grills">Grills</option>
                      <option value="Desserts">Desserts</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="sellingPrice">Selling Price</label>
                    <input
                      type="number"
                      id="sellingPrice"
                      placeholder="Set Selling Price"
                      className="input__element"
                      value={itemPrice}
                      onChange={(e) => setItemPrice(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </aside>
            ))}
          </>
        )}
      </section>
    </section>
  );
}
