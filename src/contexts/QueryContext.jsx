import { createContext, useContext, useReducer } from "react";

const QueryContext = createContext();

const initialState = {
  recipesList: [],
  search: "",
  diet: "vegan",
  intolerances: "gluten",
  type: "soup",
  number: 10,
  offset: 10,
  viewed: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "search/update":
      return {
        ...state,
        search: action.payload,
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

    // case "start":
    //   return {
    //     ...state,
    //     status: "active",
    //     secondsRemaining: state.questions.length * SECS_PER_QUESTION,
    //   };
    // case "newAnswer":
    //   const question = state.questions.at(state.index);

    //   return {
    //     ...state,
    //     answer: action.payload,
    //     points:
    //       action.payload === question.correctOption
    //         ? state.points + question.points
    //         : state.points,
    //   };

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
