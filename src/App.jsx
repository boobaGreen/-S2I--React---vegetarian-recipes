import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { QueryProvider } from "./contexts/QueryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyles from "./styles/GlobalStyles";
import Recipes from "./pages/RecipesPage";
import PageNotFound from "./pages/PageNotFound";
import FavouriteList from "./pages/FavouriteListPage";
import Recipe from "./pages/RecipePage";
import Joke from "./pages/JokePage";
import Curious from "./pages/CuriousPage";
import AppLayout from "./components/AppLayout";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <GlobalStyles />
      <DarkModeProvider>
        <QueryProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="recipes" />} />
                  <Route path="recipes" element={<Recipes />} />
                  <Route path="recipes/:id/:title" element={<Recipe />} />
                  <Route path="favourite" element={<FavouriteList />} />
                  <Route path="joke" element={<Joke />} />
                  <Route path="curious" element={<Curious />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </QueryProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
