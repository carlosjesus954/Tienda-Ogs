import { AuthContext } from "./AuthContext";

const navSup = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
];
const navMid = [
  {
    id: 2,
    title: "C.R.E.A.M",
    to: "cream",
  },
  {
    id: 3,
    title: "TIGER",
    to: "tiger",
  },
  {
    id: 4,
    title: "BEER & CHURROS",
    to: "beer&churros",
  },
  {
    id: 5,
    title: "OGs",
    to: "ogs",
  },
  {
    id: 6,
    title: "ACCESORIOS",
    to: "accesorios",
  },
];
const navMid2 = [
  {
    id: 7,
    title: "Carrito",
    to: "shop",
  },
  {
    id: 8,
    title: "Login",
    to: "contact",
  },
  {
    id: 9,
    title: "Registrarse",
    to: "registro",
  },
];
const mainConjuntos = [
  {
    id: 1,
    title: "TIGER",
    src: "/public/assets/conjunto1.jpg",
    to: "tiger",
  },
  {
    id: 2,
    title: "C.R.E.A.M.",
    src: "/public/assets/conjunto2.jpg",
    to: "cream",
  },
];
const mainConjuntos2 = [
  {
    id: 3,
    title: "BEER & CHURROS",
    src: "/public/assets/conjunto3.jpg",
    to: "beer&churros",
  },
  {
    id: 4,
    title: "OG'S",
    src: "/public/assets/conjunto4.jpg",
    to: "ogs",
  },
  {
    id: 5,
    title: "ACCESORIOS",
    src: "/public/assets/conjunto5.jpg",
    to: "accesorios",
  },
];
const footerLeft = [
  {
    id: 1,
    title: "@2023 Reserva todos los derechos",
  },
];
const footerRight = [
  {
    id: 2,
    title: "Política de envíos",
    href: "https://www.ogsbrand.com/es/politica-de-envios/",
  },
  {
    id: 3,
    title: "Contacto",
    href: "https://www.ogsbrand.com/es/contacto/",
  },
  {
    id: 4,
    title: "Condiciones de compra",
    href: "https://www.ogsbrand.com/es/condiciones-de-compra/",
  },
  {
    id: 5,
    title: "Términos de servicio",
    href: "https://www.ogsbrand.com/es/terminos-de-servicio/",
  },
  {
    id: 6,
    title: "Política de privacidad",
    href: "https://www.ogsbrand.com/es/politica-de-privacidad/",
  },
  {
    id: 7,
    title: "Política de cookies",
    href: "https://www.ogsbrand.com/es/politica-de-cookies/",
  },
  {
    id: 8,
    title: "Legal",
    href: "https://www.ogsbrand.com/es/legal/",
  },
  {
    id: 9,
    title: "Tallas",
    href: "https://www.ogsbrand.com/es/tallas/",
  },
  {
    id: 10,
    title: "Recomendaciones de cuidado",
    href: "https://www.ogsbrand.com/es/care-recommendations/",
  },
];

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        navSup,
        navMid,
        navMid2,
        mainConjuntos,
        mainConjuntos2,
        footerLeft,
        footerRight,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
