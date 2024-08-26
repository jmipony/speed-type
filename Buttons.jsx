export function Buttons({ handleReset, isActive, handelStartStop, openModal }) {
  return (
    <div className="space-x-56 mt-6">
      <button
        onClick={handleReset}
        className={
          isActive
            ? "text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl transition-colors"
            : "text-zinc-500 text-2xl gap-9"
        }
      >
        reset
      </button>
      <button
        onClick={handelStartStop}
        className=" text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl transition-colors"
      >
        {isActive ? "stop" : "start"}
      </button>
      <button
        onClick={openModal}
        className={
          isActive
            ? "text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl transition-colors"
            : "text-zinc-500 text-2xl"
        }
      >
        result
      </button>
    </div>
  );
}
