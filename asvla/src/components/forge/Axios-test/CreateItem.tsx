import React, { useState } from "react";
import axios from "axios";

const CreateItem: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await axios.post("http://10.10.12.161:3306/api/items", {
        name: name,
        description: description,
      });
      console.log(response.data); // Log the newly created item
      alert("Item created successfully!");
    } catch (error: any) {
      console.error(error.response?.data || error.message); // Handle errors
      alert("Failed to create the item.");
    }
  };

  return (
    <div>
      <h2>Create Item</h2>
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
      <button onClick={handleSubmit}>Create Item</button>
    </div>
  );
};

export default CreateItem;
