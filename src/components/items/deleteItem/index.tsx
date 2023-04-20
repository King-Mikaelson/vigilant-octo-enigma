import { MdOutlineCancel } from "react-icons/md";

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
          <button className="cancel-btn" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
