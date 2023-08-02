import { createContext, useContext, useReducer } from "react";

const QueryContext = createContext();

const offsetStartup = 0;
const number = 10;
const initialState = {
  recipesList: [],
  search: "",
  diet: "",
  intolerances: "",
  type: "",
  number: number,
  offset: offsetStartup,
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

    default:
      throw new Error("Action unkonwn");
  }
}

function QueryProvider({ children }) {
  const [
    { search, intolerances, diet, type, number, offset, viewed, recipesList },
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
