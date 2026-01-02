import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { uploadImage } from "../../utils/uploadImage";

export default function ImageInput({
  id,
  name,
  label = "",
  required,
  onChange,
  value, // Accept the value prop for the initial image URL
}) {
  const [previewImage, setPreviewImage] = useState(value || null);
  const [imageName, setImageName] = useState(value ? "Existing Image" : "No file selected");
  const [isUploading, setIsUploading] = useState(false);

  // Sync previewImage and imageName with the value prop when it changes
  useEffect(() => {
    if (value) {
      setPreviewImage(value);
      setImageName("Existing Image");
    } else {
      setPreviewImage(null);
      setImageName("No file selected");
    }
  }, [value]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        setPreviewImage(null);
        setImageName("No file selected");
        onChange?.("");
        return;
      }

      const selectedFile = acceptedFiles[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(selectedFile.type)) {
        toast("Only JPG, PNG, and WEBP images are allowed.", {
          type: "warning",
        });
        return;
      }

      if (selectedFile.size > 2 * 1024 * 1024) {
        toast("File size must be 2 MB or less.", {
          type: "warning",
        });
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async () => {
        setPreviewImage(reader.result);
        setImageName(selectedFile.name);
        setIsUploading(true);

        try {
          const response = await uploadImage(selectedFile);
          if (response.success) {
            onChange?.(response.image_url);
            toast("Image uploaded successfully!", { type: "success" });
          } else {
            toast("Error uploading image", { type: "error" });
            setPreviewImage(null);
            setImageName("No file selected");
            onChange?.("");
          }
        } catch (error) {
          console.error("Upload error:", error);
          toast("Error uploading image", { type: "error" });
          setPreviewImage(null);
          setImageName("No file selected");
          onChange?.("");
        } finally {
          setIsUploading(false);
        }
      };
    },
    [onChange]
  );

  const removeImage = () => {
    setPreviewImage(null);
    setImageName("No file selected");
    onChange?.("");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    multiple: false,
    disabled: isUploading,
  });

  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={id || "file-upload"}
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-2 py-1 text-xs font-medium text-gray-700 z-10"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        {...getRootProps()}
        className={`mt-2 flex justify-center rounded-lg border-2 border-dashed px-6 py-10 transition-all duration-200 cursor-pointer ${
          isDragActive
            ? "border-indigo-400 bg-indigo-50"
            : previewImage
            ? "border-gray-300 hover:border-gray-400"
            : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
        } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} id={id || "file-upload"} name={name || "file-upload"} required={required} />

        {previewImage ? (
          <div className="relative flex justify-center items-center w-full">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-72 object-contain rounded-lg shadow-lg"
              onError={() => {
                setPreviewImage(null);
                setImageName("No file selected");
                onChange?.("");
                toast("Failed to load image.", { type: "error" });
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors duration-200 shadow-lg"
              type="button"
              disabled={isUploading}
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <div className="text-white text-sm font-medium">Uploading...</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4">
              <span className="cursor-pointer rounded-md bg-white font-semibold text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-600 text-sm">
                {isUploading ? "Uploading..." : "Upload a file"}
              </span>
              <p className="text-sm text-gray-600 mt-1">or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 2MB</p>
              <p className="text-sm text-gray-600 mt-2 font-medium">{imageName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}