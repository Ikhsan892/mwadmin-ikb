import rootReducer from "../reducers";

interface PayloadRedux<T extends unknown> {
  type: string;
  data: T;
}

type RootState  = ReturnType<typeof rootReducer>; 

export { type PayloadRedux, type RootState };
