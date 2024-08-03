export function Info({ missCount, time, userInput, task, getInputClass }) {
  return (
    <div>
      <p className="w-[800px] text-xl/[50px] font-mono tracking-tight text-zinc-500 ">
        Miss: {missCount}
      </p>
      <p className="w-[800px] text-xl/[50px] font-mono tracking-tight text-zinc-500">
        Time: {time}
      </p>
      <p className="w-[800px] text-2xl/[50px] tracking-tight p-4 text-zinc-200">
        {getInputClass(userInput, task)}
      </p>
    </div>
  );
}
