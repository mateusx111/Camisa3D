import React from "react";

import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";
import { state } from "../store";

export const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#03C9D7",
          "#FF5, #DF4896",
          "#DDDF00",
          "#4C51BF",
          "#B9F5D0",
          "#B9F5D0",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};
