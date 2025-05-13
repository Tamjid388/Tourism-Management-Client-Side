import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Authprovider } from "./Provider/Authprovider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./Component/ScrollToTop/ScrollToTop.jsx";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <HelmetProvider>
        
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
      </HelmetProvider>
  
    </Authprovider>
  </StrictMode>
);
