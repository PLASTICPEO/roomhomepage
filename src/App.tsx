import { Route, Routes } from "react-router-dom";
import { ROOT_PATHS } from "./routes/root";
import { PAGE_PATH } from "./routes/pages/index.enum";

import DefaultLayout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";

function App() {
  return (
    <Routes>
      <Route
        path={ROOT_PATHS.ROOT}
        element={
          <DefaultLayout isWhite>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.ABOUT}
        element={
          <DefaultLayout>
            <About />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.CONTACT}
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.SHOP}
        element={
          <DefaultLayout>
            <Shop />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
