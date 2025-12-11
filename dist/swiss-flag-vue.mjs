(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes oscillate-32e9f397{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag[data-v-32e9f397]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v5bbd9da4);--oscillate-distance: 2%}.flag.low-perf[data-v-32e9f397]{--oscillate-distance: 3%}.flag.no-animation .column[data-v-32e9f397]{animation:none}.flag .column[data-v-32e9f397]{flex:1;animation:oscillate-32e9f397 .6s infinite alternate ease-in-out backwards}.flag .column.red[data-v-32e9f397]{background-color:red}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useCssVars as W, computed as h, createElementBlock as w, openBlock as p, normalizeClass as k, Fragment as x, renderList as G, normalizeStyle as M } from "vue";
const T = (o, f) => {
  const s = o.__vccOpts || o;
  for (const [g, v] of f)
    s[g] = v;
  return s;
}, B = {
  __name: "SwissFlag",
  props: {
    inlineSize: {
      type: String,
      default: "12rem"
    },
    lowPerfVariant: {
      type: Boolean,
      default: !1
    },
    removeAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(o) {
    W((r) => ({
      v5bbd9da4: o.inlineSize
    }));
    const f = o, s = h(() => {
      const r = navigator.hardwareConcurrency || 2, d = navigator.deviceMemory || 2, i = navigator.connection?.effectiveType || "4g", t = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return r >= 4 && d >= 4 && i !== "slow-2g" && !t;
    }), g = h(() => f.removeAnimation ? 5 : !f.lowPerfVariant && s.value ? 32 : 15), v = h(
      () => !f.lowPerfVariant && s.value ? 50 : 35
    ), P = h(() => {
      const r = g.value, d = [], i = 32;
      let t, l, c, m;
      r === 32 ? (t = [6, 25], l = [13, 18], c = [13, 18], m = [6, 25]) : r === 15 ? (t = [3, 11], l = [6, 8], c = [6, 8], m = [3, 11]) : (t = [1, 3], l = [2, 2], c = [2, 2], m = [1, 3]);
      const S = (e) => {
        if (r === 32) return 1;
        if (r === 5)
          return e === 1 || e === 3 ? 7 : 6;
        const n = Math.floor(e / 3);
        return n === 1 || n === 3 ? 7 / 3 : 2;
      }, y = (e, n) => {
        let a = 0;
        for (let u = e; u < n; u++)
          a += S(u);
        return a;
      };
      for (let e = 0; e < r; e++) {
        let n = -1, a = -1;
        const u = e >= c[0] && e <= c[1], b = e >= t[0] && e <= t[1];
        u ? (n = m[0], a = m[1]) : b && (n = l[0], a = l[1]);
        let C = null, A = null;
        if (n === -1)
          A = "red";
        else {
          const z = y(0, n), V = y(
            n,
            a + 1
          ), H = z / i * 100, _ = (z + V) / i * 100;
          C = `linear-gradient(to bottom, 
        #ff0000 0% ${H}%, 
        #ffffff ${H}% ${_}%, 
        #ff0000 ${_}% 100%)`;
        }
        d.push({
          width: S(e),
          singleColor: A,
          background: C
        });
      }
      return d;
    });
    return (r, d) => (p(), w("section", {
      class: k(["flag", {
        "low-perf": !s.value || o.lowPerfVariant,
        "no-animation": o.removeAnimation
      }])
    }, [
      (p(!0), w(x, null, G(P.value, (i, t) => (p(), w("div", {
        key: t,
        class: k(["column", i.singleColor]),
        style: M({
          animationDelay: (t - g.value) * v.value + "ms",
          flex: i.width,
          background: i.background
        })
      }, null, 6))), 128))
    ], 2));
  }
}, E = /* @__PURE__ */ T(B, [["__scopeId", "data-v-32e9f397"]]), $ = {
  install: (o) => {
    o.component("SwissFlag", E);
  }
};
export {
  E as SwissFlag,
  $ as default
};
