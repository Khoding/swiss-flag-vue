(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".flag[data-v-65be3309]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v779ef4ca);--oscillate-distance: var(--v64b2bc14);isolation:isolate;color-scheme:only light;forced-color-adjust:none;background-color:#fff!important;color:#000!important}.flag.no-animation .column[data-v-65be3309]{animation:none}.flag .column[data-v-65be3309]{flex:1;animation:oscillate-65be3309 var(--v7ada5c66) infinite alternate ease-in-out backwards;filter:none!important}@keyframes oscillate-65be3309{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useCssVars as E, unref as F, computed as a, createElementBlock as S, openBlock as h, normalizeClass as T, Fragment as M, renderList as N, normalizeStyle as O } from "vue";
const R = (i, t) => {
  const g = i.__vccOpts || i;
  for (const [o, p] of t)
    g[o] = p;
  return g;
}, V = {
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
  setup(i) {
    E((l) => ({
      v779ef4ca: i.inlineSize,
      v64b2bc14: W.value,
      v7ada5c66: F(x)
    }));
    const t = i, g = a(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches), o = a(() => t.reduceAnimation || g.value), p = a(() => t.removeAnimation ? 5 : o.value ? 15 : 32), D = a(() => {
      const l = p.value, v = [], c = 32;
      let r, d, f, m;
      l === 32 ? (r = [6, 25], d = [13, 18], f = [13, 18], m = [6, 25]) : l === 15 ? (r = [3, 11], d = [6, 8], f = [6, 8], m = [3, 11]) : (r = [1, 3], d = [2, 2], f = [2, 2], m = [1, 3]);
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
        const u = e >= f[0] && e <= f[1], $ = e >= r[0] && e <= r[1];
        u ? (n = m[0], s = m[1]) : $ && (n = d[0], s = d[1]);
        let w = null, b = null;
        if (n === -1)
          b = "red !important";
        else {
          const _ = A(0, n), B = A(
            n,
            s + 1
          ), k = _ / c * 100, z = (_ + B) / c * 100;
          w = `linear-gradient(to bottom, 
        #ff0000 0% ${k}%, 
        #ffffff ${k}% ${z}%, 
        #ff0000 ${z}% 100%) !important`;
        }
        v.push({
          width: y(e),
          singleColor: b,
          background: w
        });
      }
      return v;
    }), C = a(() => t.staggeredDelay !== void 0 ? t.staggeredDelay : o.value ? 35 : 50), H = a(() => t.animationSpeed !== void 0 ? t.animationSpeed : o.value ? 900 : 600), W = a(() => t.oscillateDistance !== void 0 ? t.oscillateDistance : o.value ? "3%" : "2%");
    let x = a(() => `${H.value}ms`);
    return (l, v) => (h(), S("section", {
      class: T(["flag", {
        "reduced-motion": o.value,
        "no-animation": i.removeAnimation
      }]),
      style: { "background-color": "transparent !important" }
    }, [
      (h(!0), S(M, null, N(D.value, (c, r) => (h(), S("div", {
        key: r,
        class: "column",
        style: O({
          animationDelay: (r - p.value) * C.value + "ms",
          flex: c.width,
          background: c.background,
          backgroundColor: c.singleColor
        })
      }, null, 4))), 128))
    ], 2));
  }
}, I = /* @__PURE__ */ R(V, [["__scopeId", "data-v-65be3309"]]), P = {
  install: (i) => {
    i.component("SwissFlag", I);
  }
};
export {
  I as SwissFlag,
  P as default
};
