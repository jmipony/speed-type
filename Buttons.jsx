export function Buttons({ handleReset, isActive, handleStop, openModal }) {
  return (
    <div>
      <button
        onClick={handleReset}
        className={
          isActive
            ? "text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl/[50px] p-3 px-36"
            : "text-zinc-500 text-2xl/[50px] p-3 px-36"
        }
      >
        reset
      </button>
      <button
        onClick={handleStop}
        className=" text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl/[50px] p-3 px-36"
      >
        {isActive ? "stop" : "start"}
      </button>
      <button
        onClick={openModal}
        className={
          isActive
            ? "text-zinc-200 hover:text-zinc-300 active:text-zinc-400 text-2xl/[50px] p-3 px-36"
            : "text-zinc-500 text-2xl/[50px] p-3 px-36"
        }
      >
        result
      </button>
    </div>
  );
}
