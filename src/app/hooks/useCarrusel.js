import { useEffect, useState } from "react";

export const useCarrusel = (images) => {
  const [carruselIndex, setCarruselIndex] = useState(0);
  const [estadoCarrusel, setEstadoCarrusel] = useState("");

  const handleCarruselBack = () => {
    if (carruselIndex === 0) {
      setCarruselIndex(images.length - 1);
    } else {
      setCarruselIndex(carruselIndex - 1);
    }
  };
  const handleCarruselForward = () => {
    if (carruselIndex === images.length - 1) {
      setCarruselIndex(0);
    } else {
      setCarruselIndex(carruselIndex + 1);
    }
  };

  useEffect(() => {
    switch (carruselIndex) {
      case 0:
        return setEstadoCarrusel("");
      case 1:
        return setEstadoCarrusel("Clothes-carrusel--move1");
      case 2:
        return setEstadoCarrusel("Clothes-carrusel--move2");
      case 3:
        return setEstadoCarrusel("Clothes-carrusel--move3");
    }
  }, [carruselIndex]);
  return {
    handleCarruselBack,
    handleCarruselForward,
    carruselIndex,
    estadoCarrusel,
  };
};
