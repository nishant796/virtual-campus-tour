import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/ScrollToHash";
import ScrollProgress from "@/components/ScrollProgress";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import About from "./pages/About";
import CampusTour from "./pages/CampusTour";
import Events from "./pages/Events";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import StudentResources from "./pages/StudentResources";
import AdmissionForm from "./pages/AdmissionForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <ScrollProgress />
        <Header />
        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/campus-tour" element={<CampusTour />} />
            <Route path="/events" element={<Events />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/apply" element={<AdmissionForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<StudentResources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
