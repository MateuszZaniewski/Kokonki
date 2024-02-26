export default function Color({ color, selected, setSelected }) {
  const containerStyle = {
    width: "29px",
    height: "29px",
    borderRadius: "50%",
    border: "1px solid lightgray",
    backgroundColor: color || "transparent",
    boxShadow:
      selected === color ? "0 0 0 4px #821232, 0 0 0 8px #2a4746" : "none",
  };
  if (color) {
    return (
      <div
        onClick={() => setSelected(color)}
        style={containerStyle}
        className={`cursor-pointer hover:scale-110 hover:border-2 hover:border-black`}
      ></div>
    );
  }
}
