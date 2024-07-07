import React from "react";

// custom modal implementation
const Modal: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-gray-900 rounded-lg shadow-md p-4 max-w-sm w-full">
        <h2 className="text-lg font-semibold text-white mb-2">{message}</h2>
        <button
          onClick={onClose}
          className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
