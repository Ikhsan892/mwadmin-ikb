import { IDashboard, PayloadRedux } from "../type";
import { dashboardState } from "../state";
import { TOGGLE_DARK } from "../action";

const dashboardReducer = (
  state = dashboardState,
  action: PayloadRedux<IDashboard>
) => {
  switch (action.type) {
    case TOGGLE_DARK :
      return {
        ...state,
        dark : action.data.dark
      }; 
    default: {
      return state;
    }
  }
};

export default dashboardReducer;
