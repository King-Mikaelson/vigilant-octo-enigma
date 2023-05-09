import { useState } from "react";
import { FiEdit } from "react-icons/fi";

type Props ={
  setOpenEdit?:React.Dispatch<React.SetStateAction<boolean>>
}

const EditItem = ({setOpenEdit}:Props) => {
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
    <div className="item-pry-container">
      <div className="container-item">
        <div className="header">
          <h2>Edit Item</h2>
          <FiEdit className="icon" />
        </div>
        <hr />
        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="itemName">Change Name</label>
            <input
              type="text"
              id="itemName"
              placeholder="Salted Pasta with mushroom sauce"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="itemCategory">Change Category</label>
            <select id="itemCategory">
              <option value="category1">Meals</option>
              <option value="category2">Drinks</option>
              <option value="category3">Pastries</option>
              <option value="category4">Sides</option>
              <option value="category5">Grills</option>
              <option value="category6">Desserts</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="sellingPrice">Change Price</label>
            <input
              type="number"
              id="sellingPrice"
              placeholder="N6,000"
              required
            />
          </div>
          <div className="buttons">
            <button className="add-btn" type="submit">
              Save
            </button>
            <button className="cancel-btn" onClick={() => {setOpenEdit?.((prevValue) => !prevValue)}}>
              Cancel
            </button>
          </div>
        </form>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>Item changed successfully!</p>
              <button className="close-btn" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditItem;
