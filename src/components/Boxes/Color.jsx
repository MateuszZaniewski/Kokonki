export default function Color({ color }) {
  const containerStyle = {
    width: "29px",
    height: "29px",
    borderRadius: "50%",
    border: "1px solid lightgray",
    backgroundColor: color || "transparent",
  };
  if (color) {
    return (
      <div
        style={containerStyle}
        className={`cursor-pointer hover:scale-110 hover:border-2 hover:border-black hover:shadow-[inset_0px_0px_0px_4px_#821232,0px_0px_0px_4px_#2a4746]`}
      ></div>
    );
  }
}
