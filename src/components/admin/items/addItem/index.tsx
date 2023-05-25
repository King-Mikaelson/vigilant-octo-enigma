import { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import AppContext from "../../../../context/AppContext";
import { MdArrowBackIosNew } from "react-icons/md";
import PosService from "../../../../lib/posData";

const AddItem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const { setOpenAddItem } = useContext(AppContext);

  const addItem = async () => {
    try {
      const data = {
        item_name: itemName,
        item_category: itemCategory,
        item_price: itemPrice,
      };
      const response = await PosService.addItem(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    addItem();
    const form = event.currentTarget;
    form.reset();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-item">
      <div className="header">
        <MdArrowBackIosNew
          size={20}
          className="back__icon"
          onClick={() => setOpenAddItem?.(false)}
        />
        <h2>Add New Item</h2>
        <FaPlus className="icon" />
      </div>
      <hr />
      <p className="add-item-text">Add new item to the menu</p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="itemCategory">Item Category</label>
          <select
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
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button className="add-btn" type="submit">
            Add
          </button>
          <button className="cancel-btn" type="submit">
            Cancel
          </button>
        </div>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Item added successfully!</p>
            <button className="close-btn" onClick={handleModalClose}>
              okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
