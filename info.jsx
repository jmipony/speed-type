export function Info({ missCount, time, userInput, task }) {
  //color symbol
  const getInputClass = (userInput, task) => {
    const chars = task.split("");
    let underlineIndex = 0;
    return chars.map((char, index) => {
      let className = "";
      if (index < userInput.length) {
        if (userInput[index] === char) {
          className = "text-zinc-500";
          underlineIndex = index + 1;
        } else {
          className = "text-red-500";
          underlineIndex = index + 1;
        }
        if (userInput[0] === "") {
          className = "text-zinc-200";
        }
      } else if (index === underlineIndex && userInput[0] !== "") {
        className = "underline underline-offset-8";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <p className="w-[800px] text-xl/[50px] font-mono tracking-tight text-zinc-500 ">
        Miss: {missCount}
      </p>
      <p className="w-[800px] text-xl/[50px] font-mono tracking-tight text-zinc-500">
        Time: {time}s
      </p>
      <p className="w-[800px] text-2xl/[50px] tracking-tighter p-4 text-zinc-200">
        {getInputClass(userInput, task)}
      </p>
    </div>
  );
}
