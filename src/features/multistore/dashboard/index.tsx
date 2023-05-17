import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { BiPlus } from "react-icons/bi";

export default function MultistoreDashboard() {
  const navigate = useNavigate();

  const handleAddStore = () => {
    navigate("/stores/add_store");
  };

  return (
    <>
      <Box className="add_store">
        <p>
          To get started, click the <span>Add Store</span> button to add a ‘New’
          store
        </p>
        <div>
          <button onClick={handleAddStore}>
            <BiPlus />
            Add Store
          </button>
        </div>
      </Box>
    </>
  );
}
