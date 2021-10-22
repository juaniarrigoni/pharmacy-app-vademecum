// Import dependencies
import { createStore, Store, Reducer } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// Import assets
import type { State, Dispatch, ReducerAction } from "assets/types";

// Types Definitions

const initialState: State = [];

const reducer: Reducer<State, Dispatch> = (
  state = initialState,
  action: ReducerAction
) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, id: uuidv4() }];
    case "REMOVE":
      return state.filter(({ id }) => id !== action.payload.id);
    case "REMOVE_ALL":
      return [];
    default:
      // eslint-disable-next-line no-console
      console.error("assets/store", "Action type not supported");
  }
  return state;
};

const store: Store<State, Dispatch> = createStore(reducer);

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default store;
