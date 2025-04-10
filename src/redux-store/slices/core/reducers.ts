import { type SliceCaseReducers } from "@reduxjs/toolkit";
import { IAction } from "../../store";
import { ICoreSliceState } from "../../types/core";

const createReducer = <T extends SliceCaseReducers<ICoreSliceState>>(
  reducer: T,
) => ({
  ...reducer,
});

const reducers = createReducer({
  setIsInitialized(state: ICoreSliceState, action: IAction<boolean>) {
    state.isInitialized = action.payload;
  },
  setTheme(state: ICoreSliceState, action: IAction<"light" | "dark">) {
    state.theme = action.payload;
  },
});

export default reducers;
