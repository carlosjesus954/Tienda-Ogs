import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { Footer } from "../components/Footer";
import { ClothsPages } from "../components/ClothsPages";
import {
  ContactPage,
  AppHome,
  ShopPage,
  TigerPage,
  CreamPage,
  MoMoney,
  AccesoryPage,
  RegistroPage,
  ParanoiaPage,
} from "../pages";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/*" element={<AppHome />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/cloths/shop" element={<ShopPage />} />

        <Route path="tiger" element={<TigerPage />} />
        <Route path="/cloths/tiger" element={<TigerPage />} />
        <Route path="cream" element={<CreamPage />} />
        <Route path="/cloths/cream" element={<CreamPage />} />
        <Route path="paranoia" element={<ParanoiaPage />} />
        <Route path="/cloths/paranoia" element={<ParanoiaPage />} />
        <Route path="momoney" element={<MoMoney />} />
        <Route path="/cloths/momoney" element={<MoMoney />} />
        <Route path="accesorios" element={<AccesoryPage />} />
        <Route path="/cloths/accesorios" element={<AccesoryPage />} />

        <Route path="cloths" element={<ClothsPages />} />
        <Route path="registro" element={<RegistroPage />} />
        <Route path="/contact/registro" element={<RegistroPage />} />
        <Route path="/contact/registro/contact" element={<ContactPage />} />
        <Route
          path="/contact/registro/contact/registro"
          element={<RegistroPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};
