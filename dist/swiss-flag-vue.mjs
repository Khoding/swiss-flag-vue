(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".flag[data-v-221188e4]{display:flex;aspect-ratio:1 / 1;position:relative;anchor-name:--flag-grid;--oscillate-distance: var(--v3f095c52);isolation:isolate;color-scheme:only light;forced-color-adjust:none;background-color:#fff!important;color:#000!important}.flag.no-animation .column[data-v-221188e4]{animation:none}.flag .column[data-v-221188e4]{flex:1;animation:oscillate-221188e4 var(--f96dcbae) infinite alternate ease-in-out backwards;filter:none!important}@keyframes oscillate-221188e4{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useCssVars as E, unref as F, computed as o, createElementBlock as S, openBlock as h, normalizeClass as T, renderSlot as M, Fragment as N, renderList as O, normalizeStyle as R } from "vue";
const V = (a, t) => {
  const g = a.__vccOpts || a;
  for (const [l, p] of t)
    g[l] = p;
  return g;
}, I = {
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
    E((i) => ({
      v3f095c52: W.value,
      f96dcbae: F($)
    }));
    const t = a, g = o(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches), l = o(() => t.reduceAnimation || g.value), p = o(() => t.removeAnimation ? 5 : l.value ? 15 : 32), C = o(() => {
      const i = p.value, v = [], c = 32;
      let r, d, f, m;
      i === 32 ? (r = [6, 25], d = [13, 18], f = [13, 18], m = [6, 25]) : i === 15 ? (r = [3, 11], d = [6, 8], f = [6, 8], m = [3, 11]) : (r = [1, 3], d = [2, 2], f = [2, 2], m = [1, 3]);
      const y = (e) => {
        if (i === 32) return 1;
        if (i === 5)
          return e === 1 || e === 3 ? 7 : 6;
        const n = Math.floor(e / 3);
        return n === 1 || n === 3 ? 7 / 3 : 2;
      }, A = (e, n) => {
        let s = 0;
        for (let u = e; u < n; u++)
          s += y(u);
        return s;
      };
      for (let e = 0; e < i; e++) {
        let n = -1, s = -1;
        const u = e >= f[0] && e <= f[1], x = e >= r[0] && e <= r[1];
        u ? (n = m[0], s = m[1]) : x && (n = d[0], s = d[1]);
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
    }), z = o(() => t.staggeredDelay !== void 0 ? t.staggeredDelay : l.value ? 35 : 50), H = o(() => t.animationSpeed !== void 0 ? t.animationSpeed : l.value ? 900 : 600), W = o(() => t.oscillateDistance !== void 0 ? t.oscillateDistance : l.value ? "3%" : "2%");
    let $ = o(() => `${H.value}ms`);
    return (i, v) => (h(), S("section", {
      class: T(["flag", {
        "reduced-motion": l.value,
        "no-animation": a.removeAnimation
      }]),
      style: { "background-color": "transparent !important" }
    }, [
      (h(!0), S(N, null, O(C.value, (c, r) => (h(), S("div", {
        key: r,
        class: "column",
        style: R({
          animationDelay: (r - p.value) * z.value + "ms",
          flex: c.width,
          background: c.background,
          backgroundColor: c.singleColor
        })
      }, null, 4))), 128)),
      M(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, L = /* @__PURE__ */ V(I, [["__scopeId", "data-v-221188e4"]]), X = {
  install: (a) => {
    a.component("SwissFlag", L);
  }
};
export {
  L as SwissFlag,
  X as default
};
