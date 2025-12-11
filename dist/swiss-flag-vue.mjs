(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes oscillate-efed84c9{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag[data-v-efed84c9]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v76929f62);--oscillate-distance: 2%}.flag.reduced-motion[data-v-efed84c9]{--oscillate-distance: 3%}.flag.no-animation .column[data-v-efed84c9]{animation:none}.flag .column[data-v-efed84c9]{flex:1;animation:oscillate-efed84c9 .6s infinite alternate ease-in-out backwards}.flag .column.red[data-v-efed84c9]{background-color:red}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { useCssVars as B, computed as g, createElementBlock as S, openBlock as p, normalizeClass as H, Fragment as E, renderList as F, normalizeStyle as T } from "vue";
const $ = (n, c) => {
  const l = n.__vccOpts || n;
  for (const [f, h] of c)
    l[f] = h;
  return l;
}, M = {
  __name: "SwissFlag",
  props: {
    inlineSize: {
      type: String,
      default: "12rem"
    },
    reduceAnimation: {
      type: Boolean,
      default: !1
    },
    removeAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    B((o) => ({
      v76929f62: n.inlineSize
    }));
    const c = n, l = g(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches), f = g(() => c.removeAnimation ? 5 : !c.reduceAnimation && !l.value ? 32 : 15), h = g(
      () => !c.reduceAnimation && !l.value ? 50 : 35
    ), W = g(() => {
      const o = f.value, v = [], s = 32;
      let i, u, d, m;
      o === 32 ? (i = [6, 25], u = [13, 18], d = [13, 18], m = [6, 25]) : o === 15 ? (i = [3, 11], u = [6, 8], d = [6, 8], m = [3, 11]) : (i = [1, 3], u = [2, 2], d = [2, 2], m = [1, 3]);
      const A = (e) => {
        if (o === 32) return 1;
        if (o === 5)
          return e === 1 || e === 3 ? 7 : 6;
        const t = Math.floor(e / 3);
        return t === 1 || t === 3 ? 7 / 3 : 2;
      }, w = (e, t) => {
        let r = 0;
        for (let a = e; a < t; a++)
          r += A(a);
        return r;
      };
      for (let e = 0; e < o; e++) {
        let t = -1, r = -1;
        const a = e >= d[0] && e <= d[1], x = e >= i[0] && e <= i[1];
        a ? (t = m[0], r = m[1]) : x && (t = u[0], r = u[1]);
        let y = null, z = null;
        if (t === -1)
          z = "red";
        else {
          const _ = w(0, t), b = w(
            t,
            r + 1
          ), k = _ / s * 100, C = (_ + b) / s * 100;
          y = `linear-gradient(to bottom, 
        #ff0000 0% ${k}%, 
        #ffffff ${k}% ${C}%, 
        #ff0000 ${C}% 100%)`;
        }
        v.push({
          width: A(e),
          singleColor: z,
          background: y
        });
      }
      return v;
    });
    return (o, v) => (p(), S("section", {
      class: H(["flag", {
        "reduced-motion": l.value || n.reduceAnimation,
        "no-animation": n.removeAnimation
      }])
    }, [
      (p(!0), S(E, null, F(W.value, (s, i) => (p(), S("div", {
        key: i,
        class: H(["column", s.singleColor]),
        style: T({
          animationDelay: (i - f.value) * h.value + "ms",
          flex: s.width,
          background: s.background
        })
      }, null, 6))), 128))
    ], 2));
  }
}, D = /* @__PURE__ */ $(M, [["__scopeId", "data-v-efed84c9"]]), L = {
  install: (n) => {
    n.component("SwissFlag", D);
  }
};
export {
  D as SwissFlag,
  L as default
};
