import { useSnapshot } from "valtio";
import { state } from "../store";
export const CustomButton = ({ type, tittle, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "white",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {tittle}
    </button>
  );
};