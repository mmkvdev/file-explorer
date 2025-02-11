import { useState } from "react";

const AddItemModal = ({ open, onClose, onAdd }) => {
  const [item, setItem] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (item.trim()) {
      onAdd(item);
      setItem("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Item</h3>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
