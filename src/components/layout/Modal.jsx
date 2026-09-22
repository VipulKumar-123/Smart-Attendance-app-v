import { X } from 'lucide-react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-emerald-950/80 w-full h-screen flex justify-center items-center">
      <div className="bg-emerald-800 p-10 rounded-md w-full max-w-xl">
        <div className="flex justify-end">
          <button
            onClick={() => onClose(false)}
            className="p-2 cursor-pointer"
          >
            <X />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;