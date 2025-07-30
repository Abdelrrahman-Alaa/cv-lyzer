import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/lib/utils";

interface FileUploaderProps {
  onSelectedFile?: (file: File | null) => void;
}

const FileUploader = ({ onSelectedFile }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onSelectedFile?.(file);
    },
    [onSelectedFile]
  );

  const maxFileSize = 20 * 1024 * 1024;

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: maxFileSize,
    });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-4 cursor-pointer">
          {file ? (
            <div
              className="uploader-selected-file justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <img src="/images/pdf.png" alt="pdf" className="size-8" />
                  <p className="text-lg text-gray-700 font-medium truncate">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>
                </div>
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => onSelectedFile?.(null)}
                >
                  <img
                    src="/icons/cross.svg"
                    alt="remove"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mx-auto h-16 w-16 flex items-center justify-center">
                <img src="/icons/drag.png" alt="Drop Here" />
              </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-lg text-gray-500">
                PDF (Max {formatSize(maxFileSize)} )
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
