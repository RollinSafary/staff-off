import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../../store";

const selector = (state: RootState) => state.core;

export const isInitialized = createSelector(
  [selector],
  (state) => state.isInitialized,
);

export const theme = createSelector([selector], (state) => state.theme);

export default { isInitialized, theme };
