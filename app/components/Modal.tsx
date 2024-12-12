import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-white rounded-md p-6">
        <h1 className="text-2xl font-bold mb-5 text-secondary">{title}</h1>
        {children}
        <button onClick={onClose} className="btn mt-4">Close</button>
      </div>
    </div>
  );
};

export default Modal;
