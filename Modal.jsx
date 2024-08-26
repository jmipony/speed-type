import React from "react";

export function Modal({
  isOpen,
  onClose,
  result,
  modalPercent,
  modalTime,
  handelStartStop,
  handleReset,
}) {
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
        <div className="mt-2 px-36 text-center">
          <p className="text-zinc-200 text-xl/[25px] p-3 tracking-wide">
            SPM: {result}
          </p>
          <p className="text-zinc-200 text-xl/[25px] p-3 tracking-wide">
            Miss: {modalPercent}%
          </p>
          <p className="text-zinc-200 text-xl/[25px] p-3  tracking-wide ">
            Time: {modalTime}s
          </p>
        </div>
        <div className="flex flex-row mt-5">
          <button
            onClick={handelStartStop}
            className="text-zinc-200 hover:text-zinc-300 active:text-zinc-400
            p-3 text-xl/[25px] px-20"
          >
            new task
          </button>
          <button
            className="text-zinc-200 hover:text-zinc-300 active:text-zinc-400
            text-xl/[25px] p-3 px-10"
            onClick={handelStartStop}
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
}
