import { proxy } from "valtio";
export const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./naruto.png",
  fullDecal: "./threejs.png",
});
