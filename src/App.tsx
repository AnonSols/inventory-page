import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Packages from "./pages/Packages";
import { AppLayout } from "./ui/AppLayout";
import NavProvider from "./context/NavContext";

const App = () => {
  return (
    <NavProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="package" element={<Packages />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NavProvider>
  );
};

export default App;
