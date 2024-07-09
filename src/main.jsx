import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuUtama from "./Pages/MenuUtama.jsx";
import Home from "./Pages/Home.jsx";
import MenuMakanan from "./Pages/MenuMakanan.jsx";
import MenuMinuman from "./Pages/MenuMinuman.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Pembayaran from "./Pages/Pembayaran.jsx";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MenuUtama" element={<MenuUtama />} />
            <Route path="/MenuUtama/MenuMakanan" element={<MenuMakanan />} />
            <Route path="/MenuUtama/MenuMinuman" element={<MenuMinuman />} />
            <Route path="//AboutUs" element={<AboutUs />} />
            <Route path="/Pembayaran" element={<Pembayaran />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
