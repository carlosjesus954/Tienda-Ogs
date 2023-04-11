import { useState } from "react";

export const useHoverId = () => {
  const [hoveredConjuntoId, setHoveredConjuntoId] = useState(null);

  const onToggleShowh2 = (conjuntoId) => {
    setHoveredConjuntoId(conjuntoId);
  };

  const onToggleHiddenh2 = () => {
    setHoveredConjuntoId(null);
  };
  return {
    hoveredConjuntoId,
    setHoveredConjuntoId,
    onToggleShowh2,
    onToggleHiddenh2,
  };
};
