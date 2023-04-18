import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const DeleteItem: React.FC = () => {
  const handleModalClose = () => {};

  return (
    <div className="del-container">
      <div className="del-content">
        <span className="close-btn" onClick={handleModalClose}>
          <MdOutlineCancel />
        </span>
        <p>Delete Item?</p>

        <div className="buttons">
          <button className="del-btn" type="submit">
            Delete
          </button>
          <Link to="/dashboard" className="cancel-btn" type="button">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
