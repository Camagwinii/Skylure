import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WeatherDashboard } from "./pages/weather-dashboard";
import { Layout } from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityPage } from "./pages/city-page";
import Loader from "./components/loader";
import { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  return () => clearTimeout(timer);
    },
      []);
    if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader />
      </div>
      );
    }
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
