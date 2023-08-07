import { createContext, useContext, useReducer } from "react";

const QueryContext = createContext();

const offsetStartup = 0;
const number = 12;
const mdr = 999999;

const initialState = {
  maxReadyTime: mdr,
  recipesList: [],
  search: "",
  diet: "",
  intolerances: "",
  type: "",
  number: number,
  offset: offsetStartup,
  sort: "",
  direction: "asc", //desc
};

function reducer(state, action) {
  switch (action.type) {
    case "search/update":
      return {
        ...state,
        search: action.payload,
        offset: offsetStartup,
      };

    case "page/next":
      return {
        ...state,
        offset: state.offset + state.number,
      };
    case "page/prev":
      return {
        ...state,
        offset: state.offset - state.number,
      };
    case "filter/number":
      return {
        ...state,
        number: action.payload,
      };
    case "filter/diet":
      return {
        ...state,
        diet: action.payload,
      };
    case "filter/intolerances":
      return {
        ...state,
        intolerances: action.payload,
      };
    case "filter/type":
      return {
        ...state,
        type: action.payload,
      };
    case "filter/time":
      return {
        ...state,
        maxReadyTime: action.payload,
      };
    case "filter/order":
      return {
        ...state,
        sort: action.payload,
      };
    case "filter/direction":
      return {
        ...state,
        order: action.payload,
      };

    default:
      throw new Error("Action unkonwn");
  }
}

function QueryProvider({ children }) {
  const [
    {
      search,
      intolerances,
      diet,
      type,
      number,
      offset,
      viewed,
      recipesList,
      maxReadyTime,
      sort,
      direction,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QueryContext.Provider
      value={{
        search,
        intolerances,
        diet,
        type,
        number,
        offset,
        viewed,
        recipesList,
        maxReadyTime,
        sort,
        direction,
        dispatch,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}
function useQueryCust() {
  const context = useContext(QueryContext);
  if (context === undefined)
    throw new Error("QueryContext was used outside of the QueryProvider");
  return context;
}
export { QueryProvider, useQueryCust };
