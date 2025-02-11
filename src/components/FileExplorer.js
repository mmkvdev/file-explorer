import { useState } from "react";
import FileList from "./FileList";
import AddItemModal from "./AddItemModal";

const FileExplorer = ({ data }) => {
  const [files, setFiles] = useState(data);
  const [modalState, setModalState] = useState({
    open: false,
    parentId: null,
    type: "",
  });

  const openModal = (parentId, type) => {
    setModalState({
      open: true,
      parentId,
      type,
    });
  };

  const closeModal = () => {
    setModalState({
      open: false,
      parentId: null,
      type: "",
    });
  };

  const handleAdd = (name) => {
    const newFile = {
      id: Date.now(),
      name,
      children: modalState.type === "folder" ? [] : undefined,
    };

    setFiles((prevFiles) => {
      const newFiles = prevFiles.map((file) => {
        if (file.id === modalState.parentId) {
          if (file.children) {
            return {
              ...file,
              children: [...file.children, newFile],
            };
          }
          return {
            ...file,
            children: [newFile],
          };
        }
      });
      return newFiles;
    });

    console.log({ newFile });
  };

  const handleDelete = () => {};
  return (
    <div>
      <FileList fileList={files} onAdd={openModal} onDelete={handleDelete} />
      <AddItemModal
        open={modalState.open}
        onClose={closeModal}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default FileExplorer;
