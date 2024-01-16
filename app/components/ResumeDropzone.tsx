import React, { useState } from "react";
import { cx } from "../lib/cx";

const defaultFileState = {
  name: "",
  size: 0,
  fileUrl: "",
};

const ResumeDropzone = ({
  onFileUrlChange,
  className,
  playgroundView = false,
}: {
  onFileUrlChange: (fileIrl: string) => void;
  className?: string;
  playgroundView?: boolean;
}) => {
  const [file, setFile] = useState(defaultFileState);
  const [isHoveredOnDropZone, setIsHoveredOnDropZone] = useState(false);
  const [hasNotPdfFile, setHasNotPdfFile] = useState(false);

  const hasFile = Boolean(file.name);

  const setNewFile = (newFile: File) => {
    if (file.fileUrl) {
      URL.revokeObjectURL(file.fileUrl);
    }

    const { name, size } = newFile;
    const fileUrl = URL.createObjectURL(newFile);
    setFile({ name, size, fileUrl });
    onFileUrlChange(fileUrl);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFile = e.dataTransfer.files[0];
    if (newFile.name.endsWith(".pdf")) {
      setHasNotPdfFile(false);
      setNewFile(newFile);
    } else {
      setHasNotPdfFile(true);
    }
    setIsHoveredOnDropZone(false);
  };
  return (
    <div
      className={cx(
        "flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6",
        isHoveredOnDropZone && "border-sky-400",
        playgroundView ? "pb-6 pt-4" : "py-12",
        className
      )}
      onDragOver={(event) => {
        event.preventDefault();
        setIsHoveredOnDropZone(true);
      }}
      onDragLeave={() => setIsHoveredOnDropZone(false)}
      onDrop={onDrop}
    ></div>
  );
};

export default ResumeDropzone;
