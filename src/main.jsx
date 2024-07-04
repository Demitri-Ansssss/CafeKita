import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuUtama from "./Pages/MenuUtama.jsx";
import Home from "./Pages/Home.jsx";
import MenuMakanan from "./Pages/MenuMakanan.jsx";
import MenuMinuman from "./Pages/MenuMinuman.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Keranjang from "./Pages/Keranjang.jsx";
import Pembayaran from "./Pages/Pembayaran.jsx";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MenuUtama",
    element: <MenuUtama />,
  },
  {
    path: "/MenuMakanan",
    element: <MenuMakanan />,
  },
  {
    path: "/MenuMinuman",
    element: <MenuMinuman />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Pembayaran",
    element: <Pembayaran />,
  },
  {
    path: "/Keranjang",
    element: <Keranjang />,
  },
]);

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
