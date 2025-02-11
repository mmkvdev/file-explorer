import FileObject from "./FileObject";

const FileList = ({ fileList, onAdd, onDelete }) => {
  const directories = fileList.filter((fileItem) => fileItem.children);
  directories.sort((a, b) => a.name.localeCompare(b.name));

  const nonDirectories = fileList.filter((fileItem) => !fileItem.children);
  nonDirectories.sort((a, b) => a.name.localeCompare(b.name));

  const items = [...directories, ...nonDirectories];

  return (
    <ul className="file-list">
      {items.map((file) => (
        <FileObject
          key={file.id}
          file={file}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default FileList;
