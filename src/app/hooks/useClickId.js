import { useState } from "react";

export const useClickId = () => {
  const [clickId, setClickId] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const onClickShow = (inputId) => {
    setClickId(() => ({
      ...clickId,
      [inputId]: true,
    }));
  };

  const onClickHidden = (name, formState, id) => {
    console.log(formState);
    if (formState[name].length === 0) {
      setClickId(() => ({
        ...clickId,
        [id]: false,
      }));
    }
  };

  return {
    onClickShow,
    onClickHidden,
    clickId,
  };
};
