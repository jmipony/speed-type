import React from "react";

export function Modal({ isOpen, onClose, result, missCount, showTime }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 justify-center flex items-center z-50 shadow-lg bg-black bg-opacity-25">
      <div className="bg-neutral-700 p-5 rounded-md max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-4 cursor-pointer text-zinc-200 hover:text-zinc-300 active:text-zinc-400"
        >
          x
        </button>
        <div className="mt-2">
          <p className="text-zinc-200 text-xl/[25px] p-3 px-20 tracking-wide">
            Correct SPM: {result}
          </p>
          <p className="text-zinc-200 text-xl/[25px] p-3 px-20 tracking-wide">
            Miss: {missCount}%
          </p>
          <p className="text-zinc-200 text-xl/[25px] p-3 px-20 tracking-wide">
            Time: {showTime}s
          </p>
        </div>
      </div>
    </div>
  );
}
