import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const Home     = lazy(() => import("./pages/Home"));
const About    = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Fleet    = lazy(() => import("./pages/Fleet"));
const Tours    = lazy(() => import("./pages/Tours"));
const Contact  = lazy(() => import("./pages/Contact"));
const Booking  = lazy(() => import("./pages/Booking"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex-1">
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center text-brand-blue text-xl font-semibold">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/about"    element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/fleet"    element={<Fleet />} />
              <Route path="/tours"    element={<Tours />} />
              <Route path="/tours/:slug" element={<DestinationDetail />} />
              <Route path="/contact"  element={<Contact />} />
              <Route path="/booking"  element={<Booking />} />
              <Route path="*"         element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
