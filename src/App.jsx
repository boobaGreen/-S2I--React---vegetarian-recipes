import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { QueryProvider } from "./contexts/QueryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Recipes from "./pages/Recipes";
import PageNotFound from "./pages/PageNotFound";
import FavouriteList from "./pages/FavouriteList";
import Recipe from "./pages/Recipe";

import Joke from "./pages/JokePage";
import Curious from "./pages/CuriousPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 5*60 * 1000, 5 min
        // staleTime: 1 * 60 * 1000 1 min,
        // staleTime: Infinity,
        // cacheTime: Infinity,
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
                  <Route path="recipes/:id" element={<Recipe />} />
                  <Route path="favourite" element={<FavouriteList />} />
                  <Route path="joke" element={<Joke />} />
                  <Route path="curious" element={<Curious />} />

                  {/* <Route path="bookings/:bookingId" element={<Booking />} />
            <Route path="checkin/:bookingId" element={<Checkin />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} /> */}
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
