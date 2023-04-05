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
    id: 1,
    title: "C.R.E.A.M",
    to: "cream",
  },
  {
    id: 2,
    title: "TIGER",
    to: "tiger",
  },
  {
    id: 3,
    title: "BEER & CHURROS",
    to: "beer&churros",
  },
  {
    id: 4,
    title: "OGs",
    to: "ogs",
  },
  {
    id: 5,
    title: "ACCESORIOS",
    to: "accesorios",
  },
];
const navMid2 = [
  {
    id: 1,
    title: "Carrito",
    to: "shop",
  },
  {
    id: 2,
    title: "Login",
    to: "contact",
  },
  {
    id: 3,
    title: "Registrarse",
    to: "registro",
  },
];

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ navSup, navMid, navMid2 }}>
      {children}
    </AuthContext.Provider>
  );
};
