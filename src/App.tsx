import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeC";
import PageNotFound from "./pages/PageNotFound";
import Packages from "./pages/PackageC";
// import { AppLayout } from "./ui/AppLayout";
// import NavProvider from "./context/NavContext";

const App = () => {
  return (
    // <NavProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route element={<AppLayout />}>
    //         <Route index element={<Navigate to="home" replace />} />
    //         <Route path="home" element={<Home />} />
    //         <Route path="package" element={<Packages />} />
    //         <Route path="*" element={<PageNotFound />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </NavProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="package" element={<Packages />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
