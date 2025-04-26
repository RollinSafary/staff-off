import { ICoreSliceState } from "../../types/core";

export const getInitialState = (): ICoreSliceState => ({
  isInitialized: false,
  theme: "light",
});
