import { useState } from "react";
import FileList from "./FileList";

const FileObject = ({ file, onAdd, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, children } = file;
  const isDirectory = !!children;

  return (
    <li className="file-item">
      <div className="file-row">
        <button
          className={[
            "file-item-button",
            isDirectory && "file-item-button-directory",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => isDirectory && setIsExpanded(!isExpanded)}>
          <span>{name}</span>
          {isDirectory && <>[{isExpanded ? "-" : "+"}]</>}
        </button>
        <div className="file-actions">
          {isDirectory && (
            <>
              <button onClick={() => onAdd(file.id, true)}>Add Folder</button>
              <button onClick={() => onAdd(file.id, false)}>Add File</button>
            </>
          )}
          <button>Delete</button>
        </div>
      </div>
      {children && children.length > 0 && isExpanded && (
        <FileList fileList={children} />
      )}
    </li>
  );
};

export default FileObject;
