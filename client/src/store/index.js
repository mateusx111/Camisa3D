import { proxy } from "valtio";

export const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
