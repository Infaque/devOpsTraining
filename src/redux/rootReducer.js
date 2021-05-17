import { combineReducers } from "redux";

import notesReducers from "./reducers";
import authReducer from "./auth/auth.reducer";

const appReducer = combineReducers({
  notes: notesReducers,
  user: authReducer,
});

export default appReducer;
