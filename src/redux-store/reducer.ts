import { combineReducers } from "redux";

import { coreSlice } from "./slices/core";
import { uiSlice } from "./slices/ui";

const reducer = combineReducers({
  core: coreSlice.reducer,
  ui: uiSlice.reducer,
});

export default reducer;
