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

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{ navSup, navMid, navMid2, mainConjuntos, mainConjuntos2 }}
    >
      {children}
    </AuthContext.Provider>
  );
};
