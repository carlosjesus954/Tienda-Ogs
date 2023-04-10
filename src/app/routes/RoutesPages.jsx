import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { Footer } from "../components/Footer";

import { ContactPage } from "../pages/ContactPage";
import { AppHome } from "../pages/AppHome";

import { ShopPage } from "../pages/ShopPage";
import { TigerPage } from "../pages/TigerPage";
import { CreamPage } from "../pages/CreamPage";
import { BeerAndChurros } from "../pages/BeerAndChurros";
import { OgsPage } from "../pages/OgsPage";
import { AccesoryPage } from "../pages/AccesoryPage";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/*" element={<AppHome />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="tiger" element={<TigerPage />} />
        <Route path="cream" element={<CreamPage />} />
        <Route path="beer&churros" element={<BeerAndChurros />} />
        <Route path="ogs" element={<OgsPage />} />
        <Route path="accesorios" element={<AccesoryPage />} />
      </Routes>
      <Footer />
    </>
  );
};
