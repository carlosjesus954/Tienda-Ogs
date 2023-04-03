import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { Footer } from '../components/Footer'

import { ContactPage } from "../pages/ContactPage";
import { AppHome } from "../pages/AppHome";

import { ShopPage } from "../pages/ShopPage";



export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/*" element={<AppHome />} />


        <Route path="contact" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
      <Footer/>
    </>
  );
};
