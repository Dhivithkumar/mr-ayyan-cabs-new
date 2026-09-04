import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import Index from "./pages/index.tsx";
import TirupurCabService from "./pages/TirupurCabService.tsx";
import TirupurTaxiService from "./pages/TirupurTaxiService.tsx";
import TirupurAirportTaxi from "./pages/TirupurAirportTaxi.tsx";
import TirupurOutstationCab from "./pages/TirupurOutstationCab.tsx";
import OffersPage from "./pages/OffersPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import MobileBottomBar from "./components/MobileBottomBar.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScroll>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tirupur-cab-service" element={<TirupurCabService />} />
            <Route path="/tirupur-taxi-service" element={<TirupurTaxiService />} />
            <Route path="/tirupur-airport-taxi" element={<TirupurAirportTaxi />} />
            <Route path="/tirupur-outstation-cab" element={<TirupurOutstationCab />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/offer-free-plant" element={<OffersPage />} />
            {/* CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileBottomBar />
        </BrowserRouter>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
