import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const useForm = (e, t) => {
  const [a, o] = useState(e),
    [r, n] = useState({}),
    [s, u] = useState(!1),
    [l, c] = useState(null),
    i = useNavigate(),
    [m, S] = useState({ 1: !1, 2: !1, 3: !1, 4: !1 }),
    d = (e) => {
      const { name: t, value: r } = e.target;
      o({ ...a, [t]: r });
    };
  return {
    formState: a,
    errors: r,
    loading: s,
    response: l,
    handleChange: d,
    handleSubmit: (e) => {
      e.preventDefault(), 0 === Object.keys(r).length && i("/");
    },
    clickId: m,
    onClickShow: (e) => {
      S(() => ({ ...m, [e]: !0 }));
    },
    onClickHidden: (e, a, o, r) => {
      d(r);
      const s = t(a);
      n(s), 0 === a[e].length && S(() => ({ ...m, [o]: !1 }));
    },
  };
};
