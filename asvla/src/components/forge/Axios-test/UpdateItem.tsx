import React, { useState } from "react";
import axios from "axios";

const UpdateItem: React.FC = () => {
  const [itemId, setItemId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUpdate = async (): Promise<void> => {
    try {
      const response = await axios.put(
        `http://10.10.12.161:3306/api/items/${itemId}`,
        {
          name: name,
          description: description,
        }
      );
      console.log(response.data); // Log the success message
      alert("Item updated successfully!");
    } catch (error: any) {
      console.error(error.response?.data || error.message); // Handle errors
      alert("Failed to update the item.");
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItemId(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      ></textarea>
      <button onClick={handleUpdate}>Update Item</button>
    </div>
  );
};

export default UpdateItem;
