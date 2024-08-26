export function BadKeysClick({ userInput }) {
  const handleKeyDown = (event) => {
    const badKeys = ["Backspace", "Delete", "Control"];
    if (badKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const targetClick = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(userInput.length, userInput.length);
    }
  };
  return handleKeyDown, targetClick;
}
