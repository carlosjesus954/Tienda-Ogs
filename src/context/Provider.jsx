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
const tiger = [
  {
    id: 1,
    src1: "/public/assets/camiseta_tiger.jpg",
    src2: "/public/assets/camiseta_tiger-hover.jpg",
    title: "TIGER - Camiseta Relaxed Fit",
    alt: "TIGER - Camiseta Relaxed Fit",
    precio: "32,99€",
    to: "tiger-1",
  },
  {
    id: 2,
    src1: "/public/assets/sudadera1_tiger.jpg",
    src2: "/public/assets/sudadera1_tiger-hover.jpg",
    title: "TIGER - Sudadera con Capucha",
    alt: "TIGER - Sudadera con Capucha",
    precio: "42,99€",
    to: "tiger-2",
  },
  {
    id: 3,
    src1: "/public/assets/sudadera2_tiger.jpg",
    src2: "/public/assets/sudadera2_tiger-hover.jpg",
    title: "TIGER - Sudadera",
    alt: "TIGER - Sudadera",
    precio: "39,99€",
    to: "tiger-3",
  },
];
const cream = [
  {
    id: 1,
    src1: "/public/assets/sudadera1_cream.jpg",
    src2: "/public/assets/sudadera1_cream-hover.jpg",
    title: "C.R.E.A.M. - Sudadera Beige",
    alt: "C.R.E.A.M. - Sudadera Beige",
    precio: "59,99€",
    to: "cream-1",
  },
  {
    id: 2,
    src1: "/public/assets/sudadera2_cream.jpg",
    src2: "/public/assets/sudadera2_cream-hover.jpg",
    title: "C.R.E.A.M. - Sudadera Negra",
    alt: "C.R.E.A.M. - Sudadera Negra",
    precio: "59,99€",
    to: "cream-2",
  },
];
const beerAndChurros = [
  {
    id: 1,
    src1: "/public/assets/camiseta1_beer.jpg",
    src2: "/public/assets/camiseta1_beer-hover.jpg",
    title: "KOREAN BEER - Camiseta",
    alt: "KOREAN BEER - Camiseta",
    precio: "26.99 €",
    to: "beer-1",
  },
  {
    id: 2,
    src1: "/public/assets/sudadera1_beer.jpg",
    src2: "/public/assets/sudadera1_beer-hover.jpg",
    title: "KOREAN BEER - Sudadera con Capucha",
    alt: "KOREAN BEER - Sudadera con Capucha",
    precio: "42.99 €",
    to: "beer-2",
  },
  {
    id: 3,
    src1: "/public/assets/sudadera2_beer.jpg",
    src2: "/public/assets/sudadera2_beer-hover.jpg",
    title: "KOREAN BEER - Sudadera",
    alt: "KOREAN BEER - Sudadera",
    precio: "39,99€",
    to: "beer-3",
  },
  {
    id: 4,
    src1: "/public/assets/camiseta2_beer.jpg",
    src2: "/public/assets/camiseta2_beer-hover.jpg",
    title: "2 RATS 1 CHURRO - Camiseta",
    alt: "2 RATS 1 CHURRO - Camiseta",
    precio: "26,99€",
    to: "beer-4",
  },
  {
    id: 5,
    src1: "/public/assets/sudadera3_beer.jpg",
    src2: "/public/assets/sudadera3_beer-hover.jpg",
    title: "2 RATS 1 CHURRO - Sudadera con Capucha",
    alt: "2 RATS 1 CHURRO - Sudadera con Capucha",
    precio: "42,99€",
    to: "beer-5",
  },
  {
    id: 6,
    src1: "/public/assets/sudadera4_beer.jpg",
    src2: "/public/assets/sudadera4_beer-hover.jpg",
    title: "2 RATS 1 CHURRO - Sudadera",
    alt: "2 RATS 1 CHURRO - Sudadera",
    precio: "39,99€",
    to: "beer-6",
  },
];
const ogs = [
  {
    id: 1,
    src1: "/public/assets/camiseta1_ogs.jpg",
    src2: "/public/assets/camiseta1_ogs-hover.jpg",
    title: "OG's - Camiseta",
    alt: "OG's - Camiseta",
    precio: "24.99 €",
    to: "ogs-1",
  },
  {
    id: 2,
    src1: "/public/assets/camiseta2_ogs.jpg",
    src2: "/public/assets/camiseta2_ogs-hover.jpg",
    title: "OG's 2.0 - Camiseta",
    alt: "OG's 2.0 - Camiseta",
    precio: "24.99 €",
    to: "ogs-2",
  },
  {
    id: 3,
    src1: "/public/assets/sudadera2_ogs.jpg",
    src2: "/public/assets/sudadera2_ogs-hover.jpg",
    title: "OG's - Sudadera con Capucha",
    alt: "OG's - Sudadera con Capucha",
    precio: "42.99 €",
    to: "ogs-3",
  },
  {
    id: 4,
    src1: "/public/assets/sudadera3_ogs.jpg",
    src2: "/public/assets/sudadera3_ogs-hover.jpg",
    title: "OG's 2.0 - Sudadera Con Capucha",
    alt: "OG's 2.0 - Sudadera Con Capucha",
    precio: "42.99 €",
    to: "ogs-4",
  },
  {
    id: 5,
    src1: "/public/assets/sudadera4_ogs.jpg",
    src2: "/public/assets/sudadera4_ogs-hover.jpg",
    title: "OG's 2.0 Black on Black- Sudadera",
    alt: "OG's 2.0 Black on Black- Sudadera",
    precio: "42.99 €",
    to: "ogs-5",
  },
  {
    id: 6,
    src1: "/public/assets/camiseta3_ogs.jpg",
    src2: "/public/assets/camiseta3_ogs-hover.jpg",
    title: "OG's 2.0 Black on Black - Camiseta",
    alt: "OG's 2.0 Black on Black - Camiseta",
    precio: "24.99 €",
    to: "ogs-6",
  },
];
const accesorios = [
  {
    id: 1,
    src1: "/public/assets/gorra3_ogs.jpg",
    src2: "/public/assets/gorra3_ogs-hover.jpg",
    title: "OG's - Beanie",
    alt: "OG's - Beanie",
    precio: "19.99 €",
    to: "accesorios-1",
  },
  {
    id: 2,
    src1: "/public/assets/calcetines_ogs.jpg",
    src2: "/public/assets/calcetines_ogs-hover.jpg",
    title: "SOGS",
    alt: "SOGS",
    precio: "24.99 €",
    to: "accesorios-2",
  },
  {
    id: 3,
    src1: "/public/assets/gorra1_ogs.jpg",
    src2: "/public/assets/gorra1_ogs-hover.jpg",
    title: "KIR - Gorra",
    alt: "KIR - Gorra",
    precio: "29.99 €",
    to: "ogs-3",
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
        tiger,
        cream,
        beerAndChurros,
        ogs,
        accesorios,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
