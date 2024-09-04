import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeC";
import PageNotFound from "./pages/PageNotFound";
import Packages from "./pages/PackageC";
// import { AppLayout } from "./ui/AppLayout";
// import NavProvider from "./context/NavContext";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="package" element={<Packages />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "gray",
            color: "white",
          },
        }}
      />
    </>
  );
};

export default App;
