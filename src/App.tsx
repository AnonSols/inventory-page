import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeC";
import Success from "./pages/Success";
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
          <Route path="success" element={<Success />} />
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
            maxWidth: "400px",
            padding: "16px 24px",
            backgroundColor: "#cbd5e1",
            color: "black",
          },
        }}
      />
    </>
  );
};

export default App;
