(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".flag[data-v-cc8570d4]{display:flex;aspect-ratio:1 / 1;--oscillate-distance: var(--v78cbf07b);isolation:isolate;color-scheme:only light;forced-color-adjust:none;background-color:#fff!important;color:#000!important}.flag.no-animation .column[data-v-cc8570d4]{animation:none}.flag .column[data-v-cc8570d4]{flex:1;animation:oscillate-cc8570d4 var(--v4e73aa5c) infinite alternate ease-in-out backwards;filter:none!important}@keyframes oscillate-cc8570d4{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}")),document.head.appendChild(a)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as E, unref as F, computed as r, createElementBlock as S, openBlock as h, normalizeClass as T, Fragment as M, renderList as N, normalizeStyle as O } from "vue";
const R = (a, t) => {
  const g = a.__vccOpts || a;
  for (const [o, p] of t)
    g[o] = p;
  return g;
}, V = {
  __name: "SwissFlag",
  props: {
    reduceAnimation: {
      type: Boolean,
      default: !1
    },
    animationSpeed: {
      type: Number,
      default: void 0
    },
    oscillateDistance: {
      type: String,
      default: void 0
    },
    staggeredDelay: {
      type: Number,
      default: void 0
    },
    removeAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(a) {
    E((l) => ({
      v78cbf07b: W.value,
      v4e73aa5c: F(x)
    }));
    const t = a, g = r(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches), o = r(() => t.reduceAnimation || g.value), p = r(() => t.removeAnimation ? 5 : o.value ? 15 : 32), C = r(() => {
      const l = p.value, v = [], c = 32;
      let i, d, f, m;
      l === 32 ? (i = [6, 25], d = [13, 18], f = [13, 18], m = [6, 25]) : l === 15 ? (i = [3, 11], d = [6, 8], f = [6, 8], m = [3, 11]) : (i = [1, 3], d = [2, 2], f = [2, 2], m = [1, 3]);
      const y = (e) => {
        if (l === 32) return 1;
        if (l === 5)
          return e === 1 || e === 3 ? 7 : 6;
        const n = Math.floor(e / 3);
        return n === 1 || n === 3 ? 7 / 3 : 2;
      }, A = (e, n) => {
        let s = 0;
        for (let u = e; u < n; u++)
          s += y(u);
        return s;
      };
      for (let e = 0; e < l; e++) {
        let n = -1, s = -1;
        const u = e >= f[0] && e <= f[1], $ = e >= i[0] && e <= i[1];
        u ? (n = m[0], s = m[1]) : $ && (n = d[0], s = d[1]);
        let w = null, _ = null;
        if (n === -1)
          _ = "red !important";
        else {
          const b = A(0, n), B = A(
            n,
            s + 1
          ), k = b / c * 100, D = (b + B) / c * 100;
          w = `linear-gradient(to bottom, 
        #ff0000 0% ${k}%, 
        #ffffff ${k}% ${D}%, 
        #ff0000 ${D}% 100%) !important`;
        }
        v.push({
          width: y(e),
          singleColor: _,
          background: w
        });
      }
      return v;
    }), z = r(() => t.staggeredDelay !== void 0 ? t.staggeredDelay : o.value ? 35 : 50), H = r(() => t.animationSpeed !== void 0 ? t.animationSpeed : o.value ? 900 : 600), W = r(() => t.oscillateDistance !== void 0 ? t.oscillateDistance : o.value ? "3%" : "2%");
    let x = r(() => `${H.value}ms`);
    return (l, v) => (h(), S("section", {
      class: T(["flag", {
        "reduced-motion": o.value,
        "no-animation": a.removeAnimation
      }]),
      style: { "background-color": "transparent !important" }
    }, [
      (h(!0), S(M, null, N(C.value, (c, i) => (h(), S("div", {
        key: i,
        class: "column",
        style: O({
          animationDelay: (i - p.value) * z.value + "ms",
          flex: c.width,
          background: c.background,
          backgroundColor: c.singleColor
        })
      }, null, 4))), 128))
    ], 2));
  }
}, I = /* @__PURE__ */ R(V, [["__scopeId", "data-v-cc8570d4"]]), P = {
  install: (a) => {
    a.component("SwissFlag", I);
  }
};
export {
  I as SwissFlag,
  P as default
};
