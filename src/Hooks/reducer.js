const initialState = ({ initialValue }) => ({
  item: initialValue,
  sincronizedItem: true,
  loading: true,
  error: false,
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SYNC: "SYNC",
};

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    loading: false,
    error: payload,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    item: payload,
    sincronizedItem: true,
    loading: false,
    error: false,
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
  [actionTypes.SYNC]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

export { reducer, initialState, actionTypes }