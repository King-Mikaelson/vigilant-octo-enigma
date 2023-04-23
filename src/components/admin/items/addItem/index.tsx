import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    const form = event.currentTarget;
    form.reset();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-item">
      <div className="header">
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
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="itemCategory">Item Category</label>
          <select id="itemCategory">
            <option value="category">Add Item Category</option>
            <option value="category1">Meals</option>
            <option value="category2">Drinks</option>
            <option value="category3">Pastries</option>
            <option value="category4">Sides</option>
            <option value="category5">Grills</option>
            <option value="category6">Desserts</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="sellingPrice">Selling Price</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Set Selling Price"
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
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
