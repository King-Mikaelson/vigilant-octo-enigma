import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FoodCategories: React.FC = () => {
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
    <div className="food-categories">
      <div className="header">
        <h2>All Food Categories</h2>
      </div>
      <hr />
     <div className="categories"> 
      <ul>
        <li>Meals</li>
        <li>Drinks</li>
        <li>Pastries</li>
        <li>Sides</li>
        <li>Grills</li>
        <li>Desserts</li>
      </ul>
     </div>
    </div>
  );
};

export default FoodCategories;
