import { IDashboard, PayloadRedux } from "../type";
import { dashboardState } from "../state";

const dashboardReducer = (
  state = dashboardState,
  action: PayloadRedux<IDashboard>
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default dashboardReducer;
