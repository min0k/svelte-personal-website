import { writable } from "svelte/store";
import { themes } from "./data/themes";

const createTheme = () => {
  const { subscribe, set } = writable(themes.default);

  const setTheme = (newTheme) => {
    set(newTheme);
  };

  return { subscribe, setTheme };
};

export const theme = createTheme();
