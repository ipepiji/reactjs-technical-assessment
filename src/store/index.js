import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default configureStore({
  reducer: reducers,
  middleware: [thunk],
});
