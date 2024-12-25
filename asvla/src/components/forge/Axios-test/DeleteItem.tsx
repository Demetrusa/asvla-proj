import React, { useState } from "react";
import axios from "axios";

const DeleteItem: React.FC = () => {
  const [itemId, setItemId] = useState<string>("");

  const handleDelete = async (): Promise<void> => {
    try {
      const response = await axios.delete(
        `http://10.10.12.161:3306/api/items/${itemId}`
      );
      console.log(response.data); // Log the success message
      alert("Item deleted successfully!");
    } catch (error: any) {
      console.error(error.response?.data || error.message); // Handle errors
      alert("Failed to delete the item.");
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItemId(e.target.value)
        }
      />
      <button onClick={handleDelete}>Delete Item</button>
    </div>
  );
};

export default DeleteItem;
