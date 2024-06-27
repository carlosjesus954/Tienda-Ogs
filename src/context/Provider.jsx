import { useCounter } from "../app/hooks/useCounter";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

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
    title: "PARANOIA",
    to: "paranoia",
  },
  {
    id: 5,
    title: "MO' MONEY",
    to: "momoney",
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
    src: "./assets/conjunto1.jpg",
    to: "tiger",
  },
  {
    id: 2,
    title: "C.R.E.A.M.",
    src: "./assets/conjunto2.jpg",
    to: "cream",
  },
];
const mainConjuntos2 = [
  {
    id: 3,
    title: "PARANOIA",
    src: "./assets/conjunto3.jpg",
    to: "paranoia",
  },
  {
    id: 4,
    title: "MO' MONEY",
    src: "./assets/conjunto4.jpg",
    to: "momoney",
  },
  {
    id: 5,
    title: "ACCESORIOS",
    src: "./assets/conjunto5.jpg",
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
    src1: "assets/camiseta_tiger.jpg",
    src2: "assets/camiseta_tiger-complementaria3.jpg",
    src3: "assets/camiseta_tiger-complementaria2.jpg",
    src4: "assets/camiseta_tiger-hover.jpg",
    title: "TIGER - Camiseta Relaxed Fit",
    alt: "TIGER - Camiseta Relaxed Fit",
    precio: 32.99,
    to: "tiger-1",

    text: "Pa los tigres rectos",
    text2: "Marcos mide 177cm y lleva una talla L",
    complementocolor2: "assets/camiseta_tiger-hover.jpg",
    complementocolor1: "assets/camiseta_tiger-complementaria3.jpg",
    element1: "240gsm",
    element2: "100% algodón",
    element3: "Relaxed fit",
    element4: "Guía de tallas y recomendaciones de cuidado",
    comprasimilar1: "../assets/sudadera1_cream.jpg",
    altsimilar1: "Sudadera-cream",
    comprasimilar2: "../assets/camiseta1_paranoia.jpg",
    altsimilar2: "Camiseta-beer",
    to1: "cream",
    to2: "paranoia",
    cantidad: 1,
  },
  {
    id: 2,
    src1: "assets/sudadera1_tiger.jpg",
    src2: "assets/sudadera1_tiger-carrusel.jpg",
    src3: "assets/sudadera1_tiger-hover.jpg",
    src4: "assets/sudadera1_tiger-carrusel2.jpg",
    title: "TIGER - Sudadera con Capucha",
    alt: "TIGER - Sudadera con Capucha",
    precio: 42.99,
    to: "tiger-2",

    text: "Pa los tigres rectos",
    text2: "",
    complementocolor2: "assets/sudadera1_tiger-hover.jpg",
    complementocolor1: "assets/sudadera1_tiger-carrusel.jpg",
    element1: "280 g/m², 80% algodón, 20% poliéster",
    element2: "Capucha de doble capa con cordón de ajuste.",
    element3: "Bolsillo canguro.",
    element4: "Guía de tallas y recomendaciones de cuidado",
    comprasimilar1: "assets/sudadera1_cream.jpg",
    altsimilar1: "Sudadera-cream",
    comprasimilar2: "assets/camiseta1_paranoia.jpg",
    altsimilar2: "Camiseta-beer",
    to1: "cream",
    to2: "paranoia",
    cantidad: 1,
  },
  {
    id: 3,
    src1: "assets/sudadera2_tiger-hover.jpg",
    src2: "assets/sudadera2_tiger-carrusel2.jpg",
    src3: "assets/sudadera2_tiger-carrusel1.jpg",
    src4: "assets/sudadera2_tiger.jpg",
    title: "TIGER - Sudadera",
    alt: "TIGER - Sudadera",
    precio: 39.99,
    to: "tiger-3",

    text: "Pa los tigres rectos",
    text2: "",
    complementocolor2: "assets/sudadera2_tiger.jpg",
    complementocolor1: "assets/sudadera2_tiger-carrusel2.jpg",
    element1: "280 g/m², 80% algodón ring-spun y peinado, 20% poliéster",
    element2: "Tejido de 3 capas",
    element3: "Sisas, puños y bajo con tapa costura",
    element4: "Guía de tallas y recomendaciones de cuidado",
    comprasimilar1: "assets/sudadera1_cream.jpg",
    altsimilar1: "Sudadera-cream",
    comprasimilar2: "assets/camiseta1_paranoia.jpg",
    altsimilar2: "Camiseta-beer",
    to1: "cream",
    to2: "paranoia",
    cantidad: 1,
  },
];
const cream = [
  {
    id: 1,
    src2: "assets/sudadera2_cream.jpg",
    src1: "assets/sudadera2_cream-hover.jpg",
    src4: "assets/sudadera1_cream.jpg",
    src3: "assets/sudadera1_cream-hover.jpg",
    title: "C.R.E.A.M. - Sudadera Beige",
    alt: "C.R.E.A.M. - Sudadera Beige",
    precio: 59.99,
    to: "cream-1",

    text: "Un relanzamiento de la prenda estrella del año pasado. Nuevo color, nuevos bordados, misma esencia.",
    text2: "",
    complementocolor1: "assets/sudadera2_cream.jpg",
    complementocolor2: "assets/sudadera1_cream.jpg",
    element1: "65% Algodón / 35% Poliéster",
    element2: "Bolsillo delantero con cierre de cremallera",
    element3: "Logos bordados con hilo metálico",
    element4: "Guía de tallas y recomendaciones de cuidado",
    comprasimilar1: "assets/sudadera2_tiger-carrusel1.jpg",
    altsimilar1: "Sudadera-tiger",
    comprasimilar2: "assets/gorra1_ogs.jpg",
    altsimilar2: "gorra",
    to1: "tiger",
    to2: "accesorios",
    cantidad: 1,
  },
  {
    id: 2,
    src4: "assets/sudadera2_cream.jpg",
    src3: "assets/sudadera2_cream-hover.jpg",
    src2: "assets/sudadera1_cream.jpg",
    src1: "assets/sudadera1_cream-hover.jpg",
    title: "C.R.E.A.M. - Sudadera Negra",
    alt: "C.R.E.A.M. - Sudadera Negra",
    precio: 59.99,
    to: "cream-2",

    text: "Un relanzamiento de la prenda estrella del año pasado. Nuevo color, nuevos bordados, misma esencia.",
    text2: "",
    complementocolor1: "assets/sudadera1_cream.jpg",
    complementocolor2: "assets/sudadera2_cream.jpg",
    element1: "65% Algodón / 35% Poliéster",
    element2: "Bolsillo delantero con cierre de cremallera",
    element3: "Logos bordados con hilo metálico",
    element4: "Guía de tallas y recomendaciones de cuidado",
    comprasimilar1: "../assets/sudadera2_tiger-carrusel1.jpg",
    altsimilar1: "Sudadera-tiger",
    comprasimilar2: "../assets/gorra1_ogs.jpg",
    altsimilar2: "gorra",
    to1: "tiger",
    to2: "accesorios",
    cantidad: 1,
  },
];
const paranoia = [
  {
    id: 1,
    src1: "assets/camiseta1_paranoia.jpg",
    src2: "assets/camiseta1_paranoia-hover.jpg",
    src3: "assets/camiseta2_paranoia.jpg",
    src4: "assets/camiseta2_paranoia-hover.jpg",
    title: "PARANOIA - Camiseta Huge",
    alt: "PARANOIA - Camiseta Huge",
    precio: 34.99,
    to: "paranoia-1",

    text: "Para los que mantienen la cabeza alta",
    text2: "",
    complementocolor1: "assets/camiseta1_paranoia.jpg",
    complementocolor2: "assets/camiseta2_paranoia.jpg",
    element1: " 100% Algodón, 220 gsm",
    element2: "CORTE SUPER OVERSIZE. Recuerda consultar la Guía de Tallas",
    element3: "Mangas extra largas y anchas",
    element4: "Recomendaciones de Cuidado",
    comprasimilar1: "assets/gorra3_ogs.jpg",
    altsimilar1: "accesorios",
    comprasimilar2: "assets/camiseta_tiger-complementaria1.jpg",
    altsimilar2: "camiseta-tiger",
    to1: "accesorios",
    to2: "tiger",
    cantidad: 1,
  },
  {
    id: 2,
    src1: "assets/sudadera1_paranoia.jpg",
    src2: "assets/sudadera1_paranoia-hover.jpg",
    src3: "assets/sudadera2_paranoia.jpg",
    src4: "assets/sudadera2_paranoia-hover.jpg",
    title: "PARANOIA - Hoodie",
    alt: "PARANOIA - Hoodie",
    precio: 42.99,
    to: "paranoia-2",

    text: "Para los que mantienen la cabeza alta",
    text2: "",
    complementocolor1: "assets/sudadera1_paranoia.jpg",
    complementocolor2: "assets/sudadera2_paranoia.jpg",
    element1: " 280 g/m², 80% algodón, 20% poliéster.",
    element2: "Capucha de doble capa con cordón de ajuste.",
    element3: "Bolsillo canguro.",
    element4: "Guía de Tallas y Recomendaciones de Cuidado",
    comprasimilar1: "assets/gorra3_ogs.jpg",
    altsimilar1: "accesorios",
    comprasimilar2: "assets/camiseta_tiger-complementaria1.jpg",
    altsimilar2: "camiseta-tiger",
    to1: "accesorios",
    to2: "tiger",
    cantidad: 1,
  },
  {
    id: 3,
    src1: "assets/sudadera3_paranoia.jpg",
    src2: "assets/sudadera3_paranoia-hover.jpg",
    src3: "assets/sudadera4_paranoia.jpg",
    src4: "assets/sudadera4_paranoia-hover.jpg",
    title: "PARANOIA - Hoodie",
    alt: "PARANOIA - Hoodie",
    precio: 42.99,
    to: "paranoia-3",

    text: "Para los que mantienen la cabeza alta",
    text2: "",
    complementocolor1: "assets/sudadera3_paranoia.jpg",
    complementocolor2: "../assets/sudadera4_paranoia.jpg",
    element1: " 280 g/m², 80% algodón, 20% poliéster.",
    element2: "Capucha de doble capa con cordón de ajuste.",
    element3: "Bolsillo canguro.",
    element4: "Guía de Tallas y Recomendaciones de Cuidado",
    comprasimilar1: "assets/gorra3_ogs.jpg",
    altsimilar1: "accesorios",
    comprasimilar2: "assets/camiseta_tiger-complementaria1.jpg",
    altsimilar2: "camiseta-tiger",
    to1: "accesorios",
    to2: "tiger",
    cantidad: 1,
  },
];
const momoney = [
  {
    id: 1,
    src1: "assets/camiseta1_momoney.jpg",
    src2: "assets/camiseta1_momoney-hover.jpg",
    src3: "assets/camiseta2_momoney.jpg",
    src4: "assets/camiseta2_momoney-hover.jpg",
    title: "MO' MONEY - Camiseta",
    alt: "MO' MONEY - Camiseta",
    precio: 26.99,
    to: "momoney-1",

    text: "Este diseño, como diría el Evon, es to rapero",
    text2: "",
    complementocolor1: "assets/camiseta1_momoney.jpg",
    complementocolor2: "assets/camiseta2_momoney.jpg",
    element1: " 100% Algodón Orgánico",
    element2: "Manga con dobladillo",
    element3:
      "Dobladillo de la manga y dobladillo inferior con pespunte ancho de doble aguja",
    element4: "Guía de Tallas y Recomendaciones de Cuidado",
    comprasimilar1: "assets/camiseta1_momoney.jpg",
    altsimilar1: "camiseta-momoney",
    comprasimilar2: "assets/sudadera1_cream.jpg",
    altsimilar2: "sudadera-cream",
    to1: "momoney",
    to2: "cream",
    cantidad: 1,
  },
  {
    id: 2,
    src1: "assets/sudadera1_momoney.jpg",
    src2: "assets/sudadera1_momoney-hover.jpg",
    src3: "assets/sudadera2_momoney.jpg",
    src4: "assets/sudadera2_momoney-hover.jpg",
    title: "MO' MONEY - Hoodie Oversized",
    alt: "MO' MONEY - Hoodie Oversized",
    precio: 59.99,
    to: "momoney-2",

    text: "Este diseño, como diría el Evon, es to rapero",
    text2: "",
    complementocolor1: "assets/sudadera1_momoney.jpg",
    complementocolor2: "assets/sudadera2_momoney.jpg",
    element1: "460 g/m²",
    element2: "100% Algodón Loopback Terry",
    element3: "Bolsillo canguro.",
    element4: "Guía de Tallas y Recomendaciones de Cuidado",
    comprasimilar1: "assets/camiseta1_momoney.jpg",
    altsimilar1: "camiseta-momoney",
    comprasimilar2: "assets/sudadera1_cream.jpg",
    altsimilar2: "sudadera-cream",
    to1: "momoney",
    to2: "cream",
    cantidad: 1,
  },
];
const accesorios = [
  {
    id: 1,
    src1: "assets/gorra3_ogs.jpg",
    src2: "assets/gorra3_ogs-hover.jpg",
    src3: "assets/gorra3_ogs-complementaria.jpg",
    src4: "assets/gorra3_ogs.jpg",

    title: "OG's - Beanie",
    alt: "OG's - Beanie",
    precio: 19.99,
    to: "accesorios-1",

    text: "Gorro con el logo bordado para estos días de intensísimo frío, menos si vives en Málaga, que probablemente hasta mediados de Marzo de 2025 no te hará falta porque el cambio climático es un tema bastante chungo.",
    text2: "",
    complementocolor1: "",
    complementocolor2: "",
    element1: "Punto tricotado.",
    element2: "100% algodón orgánico.",
    element3: "Talla única.",
    element4: "Este artículo NO admite devolución.",
    comprasimilar1: "assets/camiseta1_paranoia.jpg",
    altsimilar1: "camiseta-paranoia",
    comprasimilar2: "assets/camiseta_tiger-hover.jpg",
    altsimilar2: "camiseta-tiger",
    to1: "paranoia",
    to2: "tiger",
    cantidad: 1,
  },
  {
    id: 2,
    src1: "assets/calcetines_ogs.jpg",
    src2: "assets/calcetines_ogs-hover.jpg",
    src3: "assets/calcetines_ogs-complementaria1.jpg",
    src4: "assets/calcetines_ogs-complementaria2.jpg",
    title: "SOGS",
    alt: "SOGS",
    precio: 24.99,
    to: "accesorios-2",

    text: "3 pares de calcetines con estilo simple, clásico y efectivo. Perfectos para combinarlos con tus mejores chanclas como los guiris en Mallorca",
    text2: "",
    complementocolor1: "assets/calcetines_ogs-complementaria1.jpg",
    complementocolor2: "assets/calcetines_ogs-complementaria2.jpg",
    element1: " 76% Algodón",
    element2: "20% Poliéster y 4% Spandex",
    element3: "Talla única.",
    element4: "Este artículo NO admite devolución.",
    comprasimilar1: "assets/camiseta1_paranoia.jpg",
    altsimilar1: "camiseta-paranoia",
    comprasimilar2: "assets/camiseta_tiger-hover.jpg",
    altsimilar2: "camiseta-tiger",
    to1: "paranoia",
    to2: "tiger",
    cantidad: 1,
  },
  {
    id: 3,
    src1: "assets/gorra1_ogs.jpg",
    src2: "assets/gorra1_ogs-hover.jpg",
    src3: "assets/gorra1_ogs.jpg",
    src4: "assets/gorra1_ogs-hover.jpg",
    title: "KIR - Gorra",
    alt: "KIR - Gorra",
    precio: 29.99,
    to: "ogs-3",

    text: "Logo y frase bordadas, simple y efectiva. Pa tapar el flequillo asintomático",
    text2: "",
    comprasimilar1: "assets/camiseta1_paranoia.jpg",
    altsimilar1: "camiseta-paranoia",
    to1: "paranoia",
    comprasimilar2: "assets/camiseta_tiger-hover.jpg",
    altsimilar2: "camiseta-tiger",
    to2: "tiger",
    text: "Logo y frase bordadas, simple y efectiva. Pa tapar el flequillo asintomático",
    text2: "",
    complementocolor1: "",
    complementocolor2: "",
    element1: "100% poliéster reciclado",
    element2: "Ala ancha y redondeada",
    element3: "6 paneles",
    element4: "Este artículo NO admite devolución",
    cantidad: 1,
  },
];
const contact = [
  {
    id: 1,
    label: "Correo electronico",
    name: "CorreoElectronico",
    type: "email",
  },
  {
    id: 2,
    label: "Contraseña",
    name: "Contrasena",
    type: "password",
  },
];
const contactExtra = [
  {
    id: 3,
    label: "Nombre",
    name: "Nombre",
    type: "text",
  },
  {
    id: 4,
    label: "Apellidos",
    name: "Apellidos",
    type: "text",
  },
];

export const Provider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [estadoCarrito, setEstadoCarrito] = useState(false);
  const onAddCart = (props) => {
    const { id, src1, src3, sizeClothes, title, precio, complementoColor } =
      props;

    const newObjeto = {
      id: id,
      src1: src1,
      src3: src3,
      size: sizeClothes,
      nombre: title,
      precio: precio,
      color: complementoColor,
      cantidad: 1,
    };
    console.log(carrito);
    const vestimenta = carrito.findIndex(
      (objeto) =>
        JSON.stringify(objeto.nombre) === JSON.stringify(newObjeto.nombre) &&
        JSON.stringify(objeto.size) === JSON.stringify(newObjeto.size) &&
        JSON.stringify(objeto.color) === JSON.stringify(newObjeto.color)
    );
    console.log(vestimenta);
    if (vestimenta >= 0) {
      // si el objeto ya existe en el carrito, actualizar su cantidad y precio total
      const newCarrito = [...carrito];

      newCarrito[vestimenta].precio = (
        parseFloat(newCarrito[vestimenta].precio) + parseFloat(precio)
      ).toFixed(2);

      newCarrito[vestimenta].cantidad = newCarrito[vestimenta].cantidad + 1;

      newCarrito[vestimenta].precioTotal =
        newCarrito[vestimenta].cantidad * precio;

      setCarrito(newCarrito);
    } else {
      // si el objeto no existe en el carrito, agregarlo al carrito
      newObjeto.precioTotal = newObjeto.precio;
      setCarrito([...carrito, newObjeto]);
    }

    setEstadoCarrito(!estadoCarrito);
  };

  const handleCerrarCarrito = () => {
    setEstadoCarrito(!estadoCarrito);
  };
  function actualizarCarrito(nuevoCarrito) {
    setCarrito(nuevoCarrito);
  }
  function borrarRopa(index) {
    const newComplementoRopa = [...carrito];
    newComplementoRopa.splice(index, 1);
    actualizarCarrito(newComplementoRopa);
  }

  function PrecioTotal({ carrito }) {
    let total = 0;
    carrito.forEach((objeto) => {
      total += objeto.precioTotal;
    });

    return (
      <h2 className="Carrito-cuentas--precio">
        Precio Total: {total.toFixed(2)}€
      </h2>
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }
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
        paranoia,
        momoney,
        accesorios,
        contact,
        contactExtra,
        carrito,
        vaciarCarrito,
        estadoCarrito,
        onAddCart,
        actualizarCarrito,
        borrarRopa,
        handleCerrarCarrito,
        PrecioTotal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
