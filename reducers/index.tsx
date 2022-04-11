import { combineReducers } from "redux";
import dashboardReducers from "./dashboardReducers";

const rootReducer = combineReducers({
  dashboard: dashboardReducers,
  // session: sessionReducer,
  // step: stepReducers,
  // specialRate: specialRateReducers
});

export default rootReducer;
